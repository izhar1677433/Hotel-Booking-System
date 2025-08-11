const express = require("express");
const {
  getAllRooms,
  createRoom,
  getRoomById,
  deleteRoom,
  updateRoom,
} = require("../controllers/roomController");
const protect = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/getallrooms", getAllRooms);
router.get("/:id", getRoomById);
router.delete("/:id", deleteRoom);
router.put("/:id", updateRoom);
router.post("/createRoom", createRoom); // Protected route (e.g., admin only)

module.exports = router;
