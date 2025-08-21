const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./db/db");
const bookingController = require("./controllers/bookingController");

dotenv.config();
connectDB();


const app = express();

// CORS
app.use(cors());
// Manually set CORS headers for all responses (for Vercel compatibility)
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }
  next();
});

// Stripe webhook raw body middleware BEFORE express.json()
app.use("/api/stripe-webhook", express.raw({ type: "application/json" }));
// Stripe webhook route
app.post("/api/stripe-webhook", bookingController.stripeWebhook);

// Parse JSON for all other routes
app.use(express.json());

// Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/rooms", require("./routes/roomRoutes"));
app.use("/api/bookings", require("./routes/bookingRoutes"));
app.use("/api/contact", require("./routes/contactRoutes"));
app.use("/api/admin", require("./routes/adminRoutes"));

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
