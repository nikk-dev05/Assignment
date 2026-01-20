import mongoose from "mongoose";

const contentSchema = new mongoose.Schema({
  title: String,
  description: String,
});

export default mongoose.model("Content", contentSchema);
