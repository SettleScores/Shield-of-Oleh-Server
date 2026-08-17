import HttpStatusCodes from '@src/common/constants/HttpStatusCodes';
import AboutService from '@src/services/AboutService';

import { Req, Res } from './common/express-types';

/******************************************************************************
                                Functions
******************************************************************************/

async function getAll(_: Req, res: Res) {
  const about = await AboutService.getAll();

  res.status(HttpStatusCodes.OK).json(about);
}

function putt(_: Req, res: Res) {
  return res
    .status(HttpStatusCodes.NOT_IMPLEMENTED)
    .json({ message: 'PUT /about is not implemented yet' });
}

/******************************************************************************
                                Export default
******************************************************************************/

export default {
  getAll,
  putt,
} as const;