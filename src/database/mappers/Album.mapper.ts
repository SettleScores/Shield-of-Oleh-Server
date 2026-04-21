import { createMongoMapper } from './createMongoMapper';
import { IAlbum, ITrack } from '../../models/Album.model';

export const mapAlbum = createMongoMapper(
  (databaseDocument): IAlbum => ({
    id: databaseDocument._id.toString(),
    title: databaseDocument.title,
    year: databaseDocument.year,
    coverUrl: databaseDocument.coverUrl,
    tracks: databaseDocument.tracks.map(
      (track: any): ITrack => ({
        id: track.id,
        title: track.title,
        duration: track.duration,
        audioUrl: track.audioUrl,
        albumTitle: track.albumTitle,
        albumCoverUrl: track.albumCoverUrl,
      })
    ),
    created: databaseDocument.created,
  })
);