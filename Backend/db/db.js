const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    // Mongoose 6+ ignores useNewUrlParser/useUnifiedTopology; pass URI only
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected online");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
