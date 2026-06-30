import HttpStatusCodes from '@src/common/constants/HttpStatusCodes';
import GalleryImageService from '@src/services/gallery_image/GalleryImageService';

import { Req, Res } from './common/express-types';

/******************************************************************************
                                Functions
******************************************************************************/

async function getAll(_: Req, res: Res) {
  const galleryImages = await GalleryImageService.getAll();

  res.status(HttpStatusCodes.OK).json(galleryImages);
}

async function post(req: Req, res: Res) {
  const {
      url,
      thumbnailUrl,
      caption,
    } = req.body;

  if (!url) {
    return res.status(HttpStatusCodes.BAD_REQUEST).json({
      message: 'Image url is required',
    });
  }
  const galleryImage = await GalleryImageService.post({
    url,
    thumbnailUrl,
    caption,
  });

  return res.status(HttpStatusCodes.CREATED).json({
    success: true,
    data: galleryImage,
  });
}

async function deletee(req: Req, res: Res) {
  const { slug } = req.params;

  try {
    await GalleryImageService.deletee(slug);

    return res.sendStatus(HttpStatusCodes.NO_CONTENT);
  } catch (err: any) {
    if (err.message === 'Gallery image database document not found!') {
      return res
        .status(HttpStatusCodes.NOT_FOUND)
        .json({ message: 'Gallery image not found' });
    }

    return res
      .status(HttpStatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: 'Internal server error' });
  }
}

/******************************************************************************
                                Export default
******************************************************************************/

export default {
  getAll,
  post,
  deletee
} as const;
