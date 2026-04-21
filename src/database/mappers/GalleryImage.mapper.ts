import { createMongoMapper } from './createMongoMapper';

import { IGalleryImage } from '../../models/GalleryImage.model';

export const mapGalleryImage = createMongoMapper(
  (databaseDocument): IGalleryImage => ({
    id: databaseDocument.id,
    url: databaseDocument.url,
    thumbnailUrl: databaseDocument.thumbnailUrl,
    caption: databaseDocument.caption,
    created: databaseDocument.created,
  })
);