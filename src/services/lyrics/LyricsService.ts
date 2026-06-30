import { ILyrics } from '@src/models/Lyrics.model';

import LyricsRepo from '@src/repos/LyricsRepo';

import { LyricsDto } from './LyricsDto';

import { generateSlug } from '@src/common/utils/generation-utils';

import { generateUniqueSlug } from '@src/services/slug.service';

/******************************************************************************
                                Functions
******************************************************************************/

function getAll(): Promise<ILyrics[]> {
  return LyricsRepo.getAll();
}

function getOne(slug: string): Promise<ILyrics> {
  return LyricsRepo.getOne(slug);
}

function deletee(slug: string): Promise<void> {
  return LyricsRepo.deletee(slug);
}

async function putt(slugg: string, lyricsDto: LyricsDto): Promise<ILyrics> {
  /// basic validation
  if (!lyricsDto.title || !lyricsDto.text) {
    throw new Error('Title and text are required');
  }

  const existingLyrics = await LyricsRepo.getOne(slugg);

  if (!existingLyrics) {
    throw new Error('Lyrics not found');
  }

  let slug = existingLyrics.slug;

  /// if title changed — refreshing slug
  if (lyricsDto.title !== existingLyrics.title) {
    const baseSlug = generateSlug(lyricsDto.title);

    slug = await generateUniqueSlug(
      baseSlug,
      (s: string) => LyricsRepo.existsBySlug(s)
    );
  }

  const updatedLyrics = await LyricsRepo.putt(slug, {
    title: lyricsDto.title,
    albumTitle: lyricsDto.albumTitle,
    text: lyricsDto.text,
    slug,
  } as ILyrics);

  return updatedLyrics;
}

/******************************************************************************
                                Export default
******************************************************************************/

export default {
  getAll,
  getOne,
  deletee,
  putt,
} as const;