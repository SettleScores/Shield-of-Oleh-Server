import { IGalleryImage } from '@src/models/GalleryImage.model';

import { GalleryImageMongoModel } from '@src/database/models/GalleryImage.mongo';

import { mapGalleryImage } from '../database/mappers/GalleryImage.mapper';

/******************************************************************************
                                Functions
******************************************************************************/

export async function getAll(): Promise<IGalleryImage[]> {
  const galleryImageDatabaseDocuments = await GalleryImageMongoModel.find().lean();

  return galleryImageDatabaseDocuments.map(mapGalleryImage);
}

/******************************************************************************
                                Export default
******************************************************************************/

export default {
  getAll,
} as const;