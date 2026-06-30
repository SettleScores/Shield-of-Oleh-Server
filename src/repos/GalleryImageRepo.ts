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

export async function post(
  image: Omit<IGalleryImage, 'id' | 'created'>,
): Promise<IGalleryImage> {

  const createdDocument =
    await GalleryImageMongoModel.create(image);

  return mapGalleryImage(
    createdDocument.toObject(),
  );
}

export async function existsBySlug(
  slug: string,
): Promise<boolean> {

  const image = await GalleryImageMongoModel
    .exists({ slug });

  return !!image;
}

export async function getBySlug(
  slug: string,
): Promise<IGalleryImage | null> {

  const document =
    await GalleryImageMongoModel
      .findOne({ slug })
      .lean();

  if (!document) {
    return null;
  }

  return mapGalleryImage(document);
}

export async function deletee(slugg: string) {
  const deletedImage = await GalleryImageMongoModel
    .findOneAndDelete({ slug: slugg })
    .lean();

  if (deletedImage == null)
    throw new Error('Gallery image database document not found!');
}

/******************************************************************************
                                Export default
******************************************************************************/

export default {
  getAll,
  post,
  existsBySlug,
  getBySlug,
  deletee,
} as const;