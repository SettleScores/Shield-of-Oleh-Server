import HttpStatusCodes from '@src/common/constants/HttpStatusCodes';
import BandInfoService from '@src/services/band_info/BandInfoService';

import { Req, Res } from './common/express-types';

import { BandInfoDto } from '@src/services/band_info/BandInfoDto';

/******************************************************************************
                                Functions
******************************************************************************/

async function getAll(_: Req, res: Res) {
  const bandInfo = await BandInfoService.getAll();

  res.status(HttpStatusCodes.OK).json(bandInfo);
}

async function putt(req: Req, res: Res) {
  const data = req.body as unknown as BandInfoDto; /// TODO Better

  const bandInfo = await BandInfoService.putt(data);

  return res.json({
    success: true,
    data: bandInfo,
  });
}

/******************************************************************************
                                Export default
******************************************************************************/

export default {
  getAll,
  putt,
} as const;
