import mongoose from "mongoose";

const connectDB = async (req, res) => {
  console.log("Server connected")
  return mongoose.connect("mongodb://127.0.0.1:27017/b21");
};

export default connectDB;
