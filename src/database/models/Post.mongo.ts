import mongoose from "mongoose"; /// qqq mongusto

const PostSchema = new mongoose.Schema({
  slug: String,
  title: String,
  excerpt: String,
  content: String,
  date: Date,
  imageUrl: String,
  created: Date,
});

export const PostMongoModel = mongoose.model(
  "Post",
  PostSchema,
  "posts"
);