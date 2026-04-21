import mongoose from "mongoose";

const GalleryImageSchema = new mongoose.Schema({
  id: Number,
  url: String,
  thumbnailUrl: String,
  caption: String,
  created: Date,
});

export const GalleryImageMongoModel = mongoose.model(
  "GalleryImage",
  GalleryImageSchema,
  "gallery_images"
);