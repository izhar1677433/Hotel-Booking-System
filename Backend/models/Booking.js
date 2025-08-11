const mongoose = require("mongoose");

// Schema aligned with current booking flow and Stripe integration
const bookingSchema = new mongoose.Schema(
  {
    // Provided by client when starting checkout
    roomName: { type: String, required: true },
    roomNumber: { type: String, required: true },
    guestName: { type: String, required: true },
    checkIn: { type: Date, required: true },
    checkOut: { type: Date, required: true },
    price: { type: Number, required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },

    // Payment tracking
    paymentStatus: {
      type: String,
      enum: ["pending", "paid", "failed"],
      default: "pending",
      index: true,
    },
    stripeSessionId: { type: String },

    // Optional customer contact details (can be captured later)
    email: { type: String },
    phone: { type: String },
    guests: { type: Number },
    
    // Additional admin fields
    notes: { type: String },
    adminNotes: { type: String },
  },
  { timestamps: { createdAt: true, updatedAt: true } }
);

module.exports = mongoose.model("Booking", bookingSchema);
