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

function putFeatured(_: Req, res: Res) {
  return res
    .status(HttpStatusCodes.NOT_IMPLEMENTED)
    .json({ message: 'PUT /tracks/featured is not implemented yet' });
}

function putOne(_: Req, res: Res) {
  return res
    .status(HttpStatusCodes.NOT_IMPLEMENTED)
    .json({ message: 'PUT /tracks/:id is not implemented yet' });
}

/******************************************************************************
                                Export default
******************************************************************************/

export default {
  getAll,
  putFeatured,
  putOne,
} as const;