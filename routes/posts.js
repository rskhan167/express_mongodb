import express from "express";
import Post from "../models/Post.js";

const router = express.Router();

router.get("/:postId", async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    res.json(post);
  } catch (err) {
    res.json({ message: err.message });
  }
});

router.get("/all", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.json({ message: err.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const post = new Post({
      title: req.body.title,
      description: req.body.description,
      author: req.body.author,
    });

    const savedPost = await post.save();

    res.status(201).json(savedPost);
  } catch (err) {
    res.json({ message: err.message });
  }
});

export default router;
