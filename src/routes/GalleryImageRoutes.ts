import HttpStatusCodes from '@src/common/constants/HttpStatusCodes';
import GalleryImageService from '@src/services/GalleryImageService';

import { Req, Res } from './common/express-types';

/******************************************************************************
                                Functions
******************************************************************************/

async function getAll(_: Req, res: Res) {
  const galleryImages = await GalleryImageService.getAll();

  res.status(HttpStatusCodes.OK).json(galleryImages);
}

/******************************************************************************
                                Export default
******************************************************************************/

export default {
  getAll,
} as const;