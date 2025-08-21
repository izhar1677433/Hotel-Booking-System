const express = require("express");
const {
  getAllRooms,
  createRoom,
  getRoomById,
  deleteRoom,
  updateRoom,
  uploadRoomImage,
} = require("../controllers/roomController");
const protect = require("../middleware/authMiddleware");
const multer = require("multer");
const path = require("path");

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) =>
    cb(null, Date.now() + path.extname(file.originalname)),
});
const upload = multer({ storage });

router.get("/getallrooms", getAllRooms);
router.get("/:id", getRoomById);
router.delete("/:id", deleteRoom);
router.put("/:id", updateRoom);
router.post("/createRoom", createRoom); // Protected route (e.g., admin only)
router.post('/upload-room-image', upload.single('roomImage'), uploadRoomImage);

module.exports = router;

// Example
exports.getRoomById = async (req, res) => {
  const room = await Room.findById(req.params.id);
  if (!room) return res.status(404).json({ msg: 'Room not found' });
  res.json(room);
};
