import { createMongoMapper } from './createMongoMapper';
import { IFeaturedTrack } from '../../models/FeaturedTrack.model';

export const mapFeaturedTrack = createMongoMapper(
  (databaseDocument): IFeaturedTrack => ({
    id: databaseDocument._id.toString(),
    title: databaseDocument.title,
    duration: databaseDocument.duration,
    audioUrl: databaseDocument.audioUrl,
    albumTitle: databaseDocument.albumTitle,
    albumCoverUrl: databaseDocument.albumCoverUrl,
    created: databaseDocument.created,
  })
);