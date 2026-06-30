import { IAlbum } from '@src/models/Album.model';

import { AlbumMongoModel } from '@src/database/models/Album.mongo';

import { mapAlbum } from '../database/mappers/Album.mapper';

/******************************************************************************
                                Functions
******************************************************************************/

export async function getAll(): Promise<IAlbum[]> {
  const albumDatabaseDocuments = await AlbumMongoModel.find().lean();

  return albumDatabaseDocuments.map(mapAlbum); /// TODO And this shit
}

export async function post(
  album: Omit<IAlbum, 'id'>,
): Promise<IAlbum> {

  const createdDocument =
    await AlbumMongoModel.create(album);

  return mapAlbum(
    createdDocument.toObject(),
  );
}

/******************************************************************************
                                Export default
******************************************************************************/

export default {
  getAll,
  post,
} as const;