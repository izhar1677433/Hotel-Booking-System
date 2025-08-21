const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./db/db");
const bookingController = require("./controllers/bookingController");
const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');

dotenv.config();
connectDB();



const app = express();

// Serve uploaded images statically
app.use('/uploads', express.static('uploads'));

// CORS
app.use(cors());

// Stripe webhook raw body middleware BEFORE express.json()
app.use("/api/stripe-webhook", express.raw({ type: "application/json" }));
// Stripe webhook route
app.post("/api/stripe-webhook", bookingController.stripeWebhook);

// Parse JSON for all other routes
app.use(express.json());

// Routes
app.use("/api/auth", require("./routes/authRoutes"));
// Hello World
// Hello World
app.use("/api/rooms", require("./routes/roomRoutes"));

// Image upload endpoint
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, 'uploads'));
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});
const upload = multer({ storage: storage });

app.post('/api/upload', upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }
  // Return the path to the uploaded file
  res.json({ imageUrl: `/uploads/${req.file.filename}` });
});
app.use("/api/bookings", require("./routes/bookingRoutes"));
app.use("/api/contact", require("./routes/contactRoutes"));
app.use("/api/admin", require("./routes/adminRoutes"));
// app.use("/api/room-images", require("./routes/roomImageRoutes"));

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
