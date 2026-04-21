import mongoose from "mongoose";

const TrackSchema = new mongoose.Schema({
  id: String,
  title: String,
  duration: String,
  audioUrl: String,
  albumTitle: String,
  albumCoverUrl: String,
});

const AlbumSchema = new mongoose.Schema({
  id: String,
  title: String,
  year: Number,
  coverUrl: String,
  tracks: [TrackSchema],
});

export const AlbumMongoModel = mongoose.model(
  "Album",
  AlbumSchema,
  "albums"
);