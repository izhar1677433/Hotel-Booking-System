const Booking = require("../models/Booking");
const Stripe = require("stripe");

function getStripeClient() {
  const apiKey = process.env.STRIPE_SECRET;
  if (!apiKey) {
    throw new Error("Missing STRIPE_SECRET in environment");
  }
  return new Stripe(apiKey);
}

function getClientBaseUrl(req) {
  const envUrl = process.env.CLIENT_URL;
  const hasScheme = (url) => /^https?:\/\//i.test(url || "");
  if (envUrl) {
    return hasScheme(envUrl) ? envUrl : `http://${envUrl}`;
  }
  const origin = req.headers.origin || req.headers.referer;
  if (origin && hasScheme(origin)) {
    return origin.replace(/\/$/, "");
  }
  return "http://localhost:3000";
}
// ✅ Get all bookings
exports.getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().sort({ createdAt: -1 });
    res.json({ success: true, data: bookings });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// ✅ Get single booking by ID
exports.getBookingById = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);
    if (!booking) {
      return res.status(404).json({ success: false, message: "Booking not found" });
    }
    res.json({ success: true, data: booking });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// ✅ Get user's own bookings
exports.getMyBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ userId: req.user.id }).sort({ createdAt: -1 });
    res.json({ success: true, data: bookings });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// ✅ Create Stripe Checkout Session
exports.createCheckoutSession = async (req, res) => {
  console.log('here');
  
  try {
    const { roomName, roomNumber, guestName, checkIn, checkOut, price, userId } = req.body;

    // Prevent overlapping booking
    const overlap = await Booking.findOne({
      roomNumber,
      paymentStatus: "paid", // only check confirmed bookings
      $or: [
        { checkIn: { $lte: new Date(checkOut) }, checkOut: { $gte: new Date(checkIn) } }
      ]
    });

    if (overlap) {
      return res.status(400).json({ message: "Room already booked for these dates" });
    }

    // Create pending booking
    const booking = await Booking.create({
      roomName,
      roomNumber,
      guestName,
      checkIn,
      checkOut,
      price,
      paymentStatus: "pending",
      userId: userId || req.user.id // Use userId from body or from authenticated user
    });

    // Create Stripe session
    const stripe = getStripeClient();
    const clientBaseUrl = getClientBaseUrl(req);
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [{
        price_data: {
          currency: "usd",
          product_data: { name: `${roomName} - Room ${roomNumber}` },
          unit_amount: price * 100,
        },
        quantity: 1
      }],
      mode: "payment",
      success_url: `${clientBaseUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${clientBaseUrl}/cancel`,
      metadata: { bookingId: booking._id.toString() }
    });

    booking.stripeSessionId = session.id;
    await booking.save();

    res.json({ id: session.id, url: session.url });

  } catch (err) {
    console.log(err)
    res.status(500).json({ message: err.message });
  }
};

// ✅ Stripe Webhook for payment success
exports.stripeWebhook = async (req, res) => {
  const sig = req.headers["stripe-signature"];

  let event;
  try {
    // express.raw middleware attaches the raw Buffer on req.body for this route
    const stripe = getStripeClient();
    if (!process.env.STRIPE_WEBHOOK_SECRET) {
      throw new Error("Missing STRIPE_WEBHOOK_SECRET in environment");
    }
    event = stripe.webhooks.constructEvent(
      req.body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;
    const bookingId = session.metadata.bookingId;

    await Booking.findByIdAndUpdate(bookingId, { paymentStatus: "paid" });
  }

  res.json({ received: true });
};

// ✅ Update Booking
exports.updateBooking = async (req, res) => {
  try {
    const booking = await Booking.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!booking) return res.status(404).json({ message: "Booking not found" });
    res.json({ success: true, data: booking });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ✅ Delete Booking
exports.deleteBooking = async (req, res) => {
  try {
    const booking = await Booking.findByIdAndDelete(req.params.id);
    if (!booking) return res.status(404).json({ message: "Booking not found" });
    res.json({ success: true, message: "Booking deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
