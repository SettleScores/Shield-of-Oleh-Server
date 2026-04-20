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

/******************************************************************************
                                Export default
******************************************************************************/

export default {
  getAll,
} as const;