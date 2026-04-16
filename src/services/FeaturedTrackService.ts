import { IFeaturedTrack } from '@src/models/FeaturedTrack.model';
import FeaturedTrackRepo from '@src/repos/FeaturedTrackRepo';

/******************************************************************************
                                Functions
******************************************************************************/

function getAll(): Promise<IFeaturedTrack[]> {
  return FeaturedTrackRepo.getAll();
}

/******************************************************************************
                                Export default
******************************************************************************/

export default {
  getAll,
} as const;