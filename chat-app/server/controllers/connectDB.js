import mongoose from "mongoose";

const connectDB = async (req, res) => {
  return mongoose.connect("mongodb://127.0.0.1:27017/b21");
};

export default connectDB;
