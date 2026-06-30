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

export async function existsBySlug(slug: string): Promise<boolean> {
  const doc = await LyricsMongoModel.exists({ slug });
  return !!doc;
}

export async function deletee(slugg: string) {
  const deletedLyrics = await LyricsMongoModel
    .findOneAndDelete({ slug: slugg })
    .lean();

  if (deletedLyrics == null)
    throw new Error('Lyrics database document not found!');
}

export async function putt(
  slug: string,
  replacementLyrics: ILyrics
): Promise<ILyrics> {
  const updatedLyrics = await LyricsMongoModel.findOneAndReplace(
    { slug },
    replacementLyrics,
    { returnDocument: 'after', lean: true }
  );

  if (updatedLyrics == null)
    throw new Error('Lyrics database document not found!');

  return mapLyrics(updatedLyrics);
}

/******************************************************************************
                                Export default
******************************************************************************/

export default {
  getAll,
  getOne,
  existsBySlug,
  deletee,
  putt,
} as const;