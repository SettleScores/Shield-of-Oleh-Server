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

/******************************************************************************
                                Export default
******************************************************************************/

export default {
  getAll,
} as const;