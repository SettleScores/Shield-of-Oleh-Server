import HttpStatusCodes from '@src/common/constants/HttpStatusCodes';
import LyricsService from '@src/services/LyricsService';

import { Req, Res } from './common/express-types';

/******************************************************************************
                                Functions
******************************************************************************/

async function getAll(_: Req, res: Res) {
  const lyrics = await LyricsService.getAll();

  res.status(HttpStatusCodes.OK).json(lyrics);
}

async function getOne(req: Req, res: Res) {
  const { slug } = req.params;

  const lyrics = await LyricsService.getOne(slug);

  res.status(HttpStatusCodes.OK).json(lyrics);
}

/******************************************************************************
                                Export default
******************************************************************************/

export default {
  getAll,
  getOne,
} as const;