const express = require("express");
const router = express.Router();
const adminProtect = require("../middleware/adminMiddleware");
const bookingController = require("../controllers/bookingController");
const roomController = require("../controllers/roomController");
const contactController = require("../controllers/contactController");

// All admin routes are protected
router.use(adminProtect);

// Admin booking management
router.get("/bookings", bookingController.getBookings);
router.get("/bookings/:id", bookingController.getBookingById);
router.put("/bookings/:id", bookingController.updateBooking);
router.delete("/bookings/:id", bookingController.deleteBooking);

// Admin room management
router.get("/rooms", roomController.getAllRooms);
router.post("/rooms", roomController.createRoom);
router.put("/rooms/:id", roomController.updateRoom);
router.delete("/rooms/:id", roomController.deleteRoom);

// Admin contact management
router.get("/contacts", contactController.getAllContacts);
router.get("/contacts/stats", contactController.getContactStats);
router.get("/contacts/:id", contactController.getContactById);
router.put("/contacts/:id", contactController.updateContact);
router.delete("/contacts/:id", contactController.deleteContact);

module.exports = router;
