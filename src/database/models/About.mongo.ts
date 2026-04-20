import mongoose from "mongoose";

const MemberSchema = new mongoose.Schema({
  name: String,
  role: String,
  imageUrl: String,
});

const AboutSchema = new mongoose.Schema({
  biography: String,
  members: [MemberSchema],
  formedYear: Number,
  origin: String,
  genre: String,
  created: Date,
});

export const AboutMongoModel = mongoose.model(
  "About",
  AboutSchema,
  "about"
);