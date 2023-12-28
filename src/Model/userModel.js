import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  name: String,
});

export const userModel = mongoose.model("test", userSchema);