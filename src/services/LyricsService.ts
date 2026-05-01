import { ILyrics } from '@src/models/Lyrics.model';
import LyricsRepo from '@src/repos/LyricsRepo';

/******************************************************************************
                                Functions
******************************************************************************/

function getAll(): Promise<ILyrics[]> {
  return LyricsRepo.getAll();
}

function getOne(slug: string): Promise<ILyrics> {
  return LyricsRepo.getOne(slug);
}

/******************************************************************************
                                Export default
******************************************************************************/

export default {
  getAll,
  getOne,
} as const;