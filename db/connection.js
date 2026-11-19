// Import dns to fix Windows SRV lookup issues with MongoDB Atlas
import dns from "node:dns";
dns.setServers(["8.8.8.8", "1.1.1.1"]);

//import mongoose to connect to mongodb
import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Successfully connected to MongoDB Atlas!");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);
  }
};
export default connectDB;
