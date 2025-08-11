const mongoose = require("mongoose");

const facilitySchema = new mongoose.Schema({
  name: String,
  icon: String, // Store icon name or class string (e.g., "FaWifi"), not the JSX
});

const roomSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },            // title renamed to name
    description: { type: String, required: true },
    price: { type: Number, required: true },
    maxPerson: { type: Number, required: true },       // capacity renamed
    size: { type: Number },                            // in square feet or meters
    image: { type: String },                           // main image
    imageLg: { type: String },                         // large image
    facilities: [facilitySchema],                      // Array of { name, icon }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Room", roomSchema);
