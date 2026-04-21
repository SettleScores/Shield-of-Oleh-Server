import mongoose from "mongoose";

/******************************************************************************
                                 Schemas
******************************************************************************/

const SocialLinkSchema = new mongoose.Schema({
  platform: String,
  url: String,
});

const BandInfoSchema = new mongoose.Schema({
  name: String,
  copyright: String,
  socialLinks: [SocialLinkSchema],
});

/******************************************************************************
                                 Model
******************************************************************************/

export const BandInfoMongoModel = mongoose.model(
  "BandInfo",
  BandInfoSchema,
  "band_info"
);