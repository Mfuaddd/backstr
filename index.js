import express from "express";
import mongoose from "mongoose";
import { userRouter } from "./src/Router/userRouter.js";
import { createLog } from "./src/Middleware/loggerMiddleWare.js";
const app = express();
const port = 4000;
const dbURL = "mongodb+srv://mi6vyr5cb:mi6vyr5cb@cluster0.wireeb6.mongodb.net/";

app.use(express.json());

mongoose
  .connect(dbURL)
  .then(() => console.log("Connected"))
  .catch((err) => console.log(err.message));

app.use("/user", createLog, userRouter);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
