const Room = require("../models/Room");

exports.getAllRooms = async (req, res) => {
  try {
    const rooms = await Room.find();
    res.json(rooms);
  } catch (err) {
    res.status(500).json({ msg: "Error fetching rooms" });
  }
};

exports.getRoomById = async (req, res) => {
  try {
    const room = await Room.findById(req.params.id);
    if (!room) return res.status(404).json({ msg: "Room not found" });
    res.json(room);
  } catch (err) {
    res.status(500).json({ msg: "Error fetching room" });
  }
};

exports.createRoom = async (req, res) => {
  try {
    const room = await Room.create(req.body);
    res.status(201).json(room);
    console.log('created');
    
  } catch (err) {
    res.status(500).json({ msg: "Error creating room" });
  }
};

exports.deleteRoom = async (req, res) => {
  try {
    const room = await Room.findByIdAndDelete(req.params.id);
    if (!room) {
      return res.status(404).json({ msg: "Room not found" });
    }
    res.json({ msg: "Room deleted successfully" });
    console.log('deleted');
    
  } catch (err) {
    res.status(500).json({ msg: "Error deleting room" });
  }
};

exports.updateRoom = async (req, res) => {
 try {
    const room = await Room.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!room) return res.status(404).json({ msg: "Room not found" });
    res.json(room);
  } catch (err) {
    res.status(500).json({ msg: "Error updating room" });
  }
};