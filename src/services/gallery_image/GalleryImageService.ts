import { IGalleryImage } from '@src/models/GalleryImage.model';
import GalleryImageRepo from '@src/repos/GalleryImageRepo';
import { GalleryImageDto } from './GalleryImageDto';
import { generateSlug } from '@src/common/utils/generation-utils';
import { generateUniqueSlug } from '@src/services/slug.service';
import CloudflareRepo from '@src/repos/CloudflareRepo';
import { extractObjectKey } from '@src/common/utils/extractObjectKey';

/******************************************************************************
                                Functions
******************************************************************************/

function getAll(): Promise<IGalleryImage[]> {
  return GalleryImageRepo.getAll();
}

async function post(
  galleryImageDto: GalleryImageDto,
): Promise<IGalleryImage> {

  if (!galleryImageDto.url) {
    throw new Error(
      'Image url is required',
    );
  }

  const objectKey =
    extractObjectKey(
      galleryImageDto.url,
    );

  const baseSlug = generateSlug(
    galleryImageDto.caption || 'image',
  );

  const slug = await generateUniqueSlug(
    baseSlug,
    (s: string) =>
      GalleryImageRepo.existsBySlug(s),
  );

  return GalleryImageRepo.post({
    url: galleryImageDto.url,
    thumbnailUrl:
      galleryImageDto.thumbnailUrl ??
      galleryImageDto.url,
    objectKey,
    caption:
      galleryImageDto.caption ?? '',
    slug,
  });
}

async function deletee(
  slug: string,
): Promise<void> {

  const image =
    await GalleryImageRepo.getBySlug(slug);  

  if (!image) {
    throw new Error('Gallery image not found');
  }

  await CloudflareRepo.deleteeImage(
    image.objectKey,
  );

  await GalleryImageRepo.deletee(
    slug,
  );
}

/******************************************************************************
                                Export default
******************************************************************************/

export default {
  getAll,
  post,
  deletee,
} as const;