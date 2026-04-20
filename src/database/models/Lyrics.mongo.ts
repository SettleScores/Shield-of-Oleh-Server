import mongoose from "mongoose";

const LyricsSchema = new mongoose.Schema({
  slug: String,
  title: String,
  albumTitle: String,
  text: String,
});

export const LyricsMongoModel = mongoose.model(
  "Lyrics",
  LyricsSchema,
  "lyrics"
);