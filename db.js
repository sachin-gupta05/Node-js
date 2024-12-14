import mongoose from "mongoose";
const dbname = "Book";
const dbConnect = async () => {
  try {
    const db = await mongoose.connect(`${process.env.url}`);
    console.log("mongodb is connected successfully", db.connection.host);
  } catch (error) {
    console.log("mongodb is not connected", error);
  }
};

export default dbConnect;
