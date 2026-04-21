import HttpStatusCodes from '@src/common/constants/HttpStatusCodes';
import AlbumService from '@src/services/AlbumService';

import { Req, Res } from './common/express-types';

/******************************************************************************
                                Functions
******************************************************************************/

async function getAll(_: Req, res: Res) {
  const albums = await AlbumService.getAll();

  res.status(HttpStatusCodes.OK).json(albums);
}

/******************************************************************************
                                Export default
******************************************************************************/

export default {
  getAll,
} as const;