import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });
    console.log("DataBase is now Connected!");
  } catch (error) {
    console.error("Error Connecting to the database: ", error.message);
  }
};

export default connectDB;
