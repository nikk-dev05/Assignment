import mongoose from "mongoose";

export default mongoose.model(
  "Lead",
  new mongoose.Schema({
    name: String,
    email: String
  })
);
