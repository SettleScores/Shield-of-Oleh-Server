import { ILyrics } from '@src/models/Lyrics.model';
import LyricsRepo from '@src/repos/LyricsRepo';

/******************************************************************************
                                Functions
******************************************************************************/

function getAll(): Promise<ILyrics> {
  return LyricsRepo.getAll();
}

/******************************************************************************
                                Export default
******************************************************************************/

export default {
  getAll,
} as const;