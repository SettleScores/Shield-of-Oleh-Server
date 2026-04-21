import { IAlbum } from '@src/models/Album.model';
import AlbumRepo from '@src/repos/AlbumRepo';

/******************************************************************************
                                Functions
******************************************************************************/

function getAll(): Promise<IAlbum[]> {
  console.log('qqq__AlbumService getAll'); 

  return AlbumRepo.getAll();
}

/******************************************************************************
                                Export default
******************************************************************************/

export default {
  getAll,
} as const;