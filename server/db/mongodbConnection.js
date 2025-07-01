// This function initializes the MongoDB connection using Mongoose.
// It reads the MongoDB URI from environment variables and connects to the database.
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const MONGO_URI = process.env.MONGO_URI;

export const mongodbConnection = () => {
  if (!MONGO_URI) {
    throw new Error("MongoDB URI is not defined in environment variables");
  }
  mongoose
    .connect(MONGO_URI)
    .then(() => console.log("✅ MongoDB connected"))
    .catch((err) => console.error(err));
};
