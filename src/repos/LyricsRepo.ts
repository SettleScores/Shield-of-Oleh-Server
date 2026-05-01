import { ILyrics } from '../models/Lyrics.model';

import { LyricsMongoModel } from '@src/database/models/Lyrics.mongo';

import { mapLyrics } from '../database/mappers/Lyrics.mapper';

/******************************************************************************
                                Functions
******************************************************************************/

export async function getAll(): Promise<ILyrics[]> {
  const lyricsDatabaseDocuments = await LyricsMongoModel.find().lean();

  return lyricsDatabaseDocuments.map(mapLyrics);
}

export async function getOne(slugg: string): Promise<ILyrics> {
  const lyricsDatabaseDocument = await LyricsMongoModel.findOne( {slug: slugg} ).lean();

  if (lyricsDatabaseDocument == null)
    throw new Error('Lyrics database document not found!');

  return mapLyrics(lyricsDatabaseDocument);
}

/******************************************************************************
                                Export default
******************************************************************************/

export default {
  getAll,
  getOne,
} as const;