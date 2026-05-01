import { IAlbum } from '@src/models/Album.model';
import AlbumRepo from '@src/repos/AlbumRepo';

/******************************************************************************
                                Functions
******************************************************************************/

function getAll(): Promise<IAlbum[]> {
  return AlbumRepo.getAll();
}

/******************************************************************************
                                Export default
******************************************************************************/

export default {
  getAll,
} as const;