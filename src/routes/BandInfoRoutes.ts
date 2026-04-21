import HttpStatusCodes from '@src/common/constants/HttpStatusCodes';
import BandInfoService from '@src/services/BandInfoService';

import { Req, Res } from './common/express-types';

/******************************************************************************
                                Functions
******************************************************************************/

async function getAll(_: Req, res: Res) {
  const bandInfo = await BandInfoService.getAll();

  res.status(HttpStatusCodes.OK).json(bandInfo);
}

/******************************************************************************
                                Export default
******************************************************************************/

export default {
  getAll,
} as const;