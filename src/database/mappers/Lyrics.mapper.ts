import { createMongoMapper } from './createMongoMapper';
import { ILyrics } from '../../models/Lyrics.model';

export const mapLyrics = createMongoMapper(
  (databaseDocument): ILyrics => ({
    id: databaseDocument._id.toString(),
    slug: databaseDocument.slug,
    title: databaseDocument.title,
    albumTitle: databaseDocument.albumTitle,
    text: databaseDocument.text,
    created: databaseDocument.created,
  })
);