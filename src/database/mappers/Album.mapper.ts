import { createMongoMapper } from './createMongoMapper';
import { IAlbum, ITrack } from '../../models/Album.model';

// 🔽 локальні типи для Mongo
type DbTrack = {
  id: string;
  title: string;
  duration: string;
  audioUrl: string;
  albumTitle: string;
  albumCoverUrl: string;
};

type DbAlbum = {
  _id: number;
  title: string;
  year: number;
  coverUrl: string;
  tracks: DbTrack[];
  created: Date;
};

export const mapAlbum = createMongoMapper(
  (databaseDocument: DbAlbum): IAlbum => ({
    id: databaseDocument._id,
    title: databaseDocument.title,
    year: databaseDocument.year,
    coverUrl: databaseDocument.coverUrl,
    tracks: databaseDocument.tracks.map(
      (track): ITrack => ({
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