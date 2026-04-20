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

/******************************************************************************
                                Export default
******************************************************************************/

export default {
  getAll,
} as const;