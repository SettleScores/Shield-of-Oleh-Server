import mongoose from 'mongoose';

const GalleryImageSchema = new mongoose.Schema({
  id: Number,
  url: String,
  thumbnailUrl: String,
  caption: String,
  slug: { type: String,
    //  required: true, 
     unique: true },
  objectKey: String,
  created: { /// TODO To think about adding such requirements to other Mongo models
    type: Date,
    default: Date.now,
  },
});

export const GalleryImageMongoModel = mongoose.model(
  'GalleryImage',
  GalleryImageSchema,
  'gallery_images',
);
