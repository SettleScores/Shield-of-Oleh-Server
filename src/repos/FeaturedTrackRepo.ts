import { IFeaturedTrack } from '@src/models/FeaturedTrack.model';

import { FeaturedTrackMongoModel } from '@src/database/models/FeaturedTrack.mongo';

import { mapFeaturedTrack } from '../database/mappers/FeaturedTrack.mapper';
/******************************************************************************
                                Functions
******************************************************************************/

/**
 * Get all tracks (for Featured Tracks on HOME page).
 */
export async function getAll(): Promise<IFeaturedTrack[]> {
  const featuredTrackDatabaseDocuments = await FeaturedTrackMongoModel.find().lean();

  return featuredTrackDatabaseDocuments.map(mapFeaturedTrack);
}

/******************************************************************************
                                Export default
******************************************************************************/

export default {
  getAll,
} as const;