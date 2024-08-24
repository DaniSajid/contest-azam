import mongoose from "mongoose";
import "dotenv/config";

const dbConnect = mongoose
  .connect(process.env.DB_URl)
  .then(() => {
    console.log("App successufully connected to database");
  })
  .catch((error) => {
    console.log(error);
  });

export default dbConnect;
