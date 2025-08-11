const express = require("express");
const router = express.Router();
const bookingController = require("../controllers/bookingController");
const protect = require("../middleware/authMiddleware");

// Public routes (viewing rooms)
router.get("/", bookingController.getBookings);
router.get("/:id", bookingController.getBookingById);

// Protected routes (user must be logged in to book)
router.get("/my-bookings", protect, bookingController.getMyBookings);
router.post("/create-checkout-session", protect, bookingController.createCheckoutSession);
router.put("/:id", protect, bookingController.updateBooking);
router.delete("/:id", protect, bookingController.deleteBooking);

module.exports = router;
