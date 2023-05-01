import mongoose from "mongoose";

const db = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URL as string);
    console.log("connected to database");
    return connect;
  } catch (error) {
    console.log("failed to connect", error);
  }
};

export default db;
