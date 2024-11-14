const mongoose = require("mongoose");

const connectDB = async () => {
  const conn = await mongoose.connect(
    //change to our own mongodb
    "mongodb+srv://GhanimAlhashash:raphsidion@cluster0.mhgiv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  );
  console.log(`mongo connected: ${conn.connection.host}`);
};

module.exports = connectDB;
