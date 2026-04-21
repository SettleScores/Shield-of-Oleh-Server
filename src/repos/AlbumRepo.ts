import { IAlbum } from '@src/models/Album.model';

import { AlbumMongoModel } from '@src/database/models/Album.mongo';

import { mapAlbum } from '../database/mappers/Album.mapper';

/******************************************************************************
                                Functions
******************************************************************************/

export async function getAll(): Promise<IAlbum[]> {
  console.log('qqq__AlbumRepo getAll');

  const albumDatabaseDocuments = await AlbumMongoModel.find().lean();

  return albumDatabaseDocuments.map(mapAlbum);
}

/******************************************************************************
                                Export default
******************************************************************************/

export default {
  getAll,
} as const;