import mongoose from "mongoose";

const settingsSchema = new mongoose.Schema({
  userId: String,
  preferences: Object,
});

export default mongoose.model("Settings", settingsSchema);
