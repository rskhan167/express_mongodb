import mongoose from "mongoose";

const PostSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  author: { type: String, required: true },
  date: { type: Date, required: true, default: Date.now },
});

export default mongoose.model("Posts", PostSchema);
