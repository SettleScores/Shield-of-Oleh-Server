import { IAlbum } from '@src/models/Album.model';
import AlbumRepo from '@src/repos/AlbumRepo';
import { AlbumDto } from './AlbumDto';

/******************************************************************************
                                Functions
******************************************************************************/

function getAll(): Promise<IAlbum[]> {
  return AlbumRepo.getAll();
}

async function post(
  albumDto: AlbumDto,
): Promise<IAlbum> {

  if (!albumDto.title) {
    throw new Error('Title is required');
  }

  if (!albumDto.coverUrl) {
    throw new Error('Cover URL is required');
  }

  const tracks = albumDto.tracks.map(track => ({
    id: track.id,
    title: track.title,
    duration: track.duration,
    audioUrl: track.audioUrl,
    objectKey: track.objectKey,
    albumTitle: albumDto.title,
    albumCoverUrl: albumDto.coverUrl,
  }));

  return AlbumRepo.post({
    title: albumDto.title,
    year: albumDto.year,
    coverUrl: albumDto.coverUrl,
    tracks,
    created: new Date(),
  } as Omit<IAlbum, 'id'>);
}

/******************************************************************************
                                Export default
******************************************************************************/

export default {
  getAll,
  post,
} as const;