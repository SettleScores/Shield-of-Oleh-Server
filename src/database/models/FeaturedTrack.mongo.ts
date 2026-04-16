import mongoose from "mongoose";

const FeaturedTrackSchema = new mongoose.Schema({
  title: String,
  duration: String,
  audioUrl: String,
  albumTitle: String,
  albumCoverUrl: String,
  created: Date,
});

export const FeaturedTrackMongoModel = mongoose.model(
  "FeaturedTrack",
  FeaturedTrackSchema,
  "featured_tracks"
);