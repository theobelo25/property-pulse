import mongoose from "mongoose";

let connected = false;

const connectDB = async () => {
  mongoose.set("strictQuery", true);

  // If db already connect, return
  if (connected) {
    console.log("MongoDB is connected");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI!);
    connected = true;
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
