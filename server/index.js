import express from "express";
import router from "./routes/routes.js";
import cors from "cors";
import connectDB from "./config/db.js";
import dotenv from "dotenv";

const app = express();
app.use(cors());
app.use("/", router);
dotenv.config();
connectDB();

app.listen(process.env.PORT, () => {
  console.log(`the server is working on ${process.env.PORT} port currently`);
});
