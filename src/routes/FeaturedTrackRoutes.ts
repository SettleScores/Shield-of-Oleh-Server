import HttpStatusCodes from '@src/common/constants/HttpStatusCodes';
import FeaturedTrackService from '@src/services/FeaturedTrackService';

import { Req, Res } from './common/express-types';

/******************************************************************************
                                Functions
******************************************************************************/

async function getAll(_: Req, res: Res) {
  const featuredTracks = await FeaturedTrackService.getAll();

  res.status(HttpStatusCodes.OK).json(featuredTracks);
}

/******************************************************************************
                                Export default
******************************************************************************/

export default {
  getAll,
} as const;