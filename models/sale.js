import mongoose from "mongoose";

const saleSchema = new mongoose.Schema({
  product: String,
  amount: Number,
});

export default mongoose.model("Sale", saleSchema);
