import HttpStatusCodes from '@src/common/constants/HttpStatusCodes';
import AlbumService from '@src/services/album/AlbumService';

import { Req, Res } from './common/express-types';

import { AlbumDto } from '@src/services/album/AlbumDto';

/******************************************************************************
                                Functions
******************************************************************************/

async function getAll(_: Req, res: Res) {
  const albums = await AlbumService.getAll();

  res.status(HttpStatusCodes.OK).json(albums);
}

async function post(
  req: Req<AlbumDto>,
  res: Res,
) {
  try {

    const {
      title,
      year,
      coverUrl,
      tracks,
    } = req.body;

    const album = await AlbumService.post({
      title,
      year,
      coverUrl,
      tracks,
    });

    return res
      .status(HttpStatusCodes.CREATED)
      .json({
        success: true,
        data: album,
      });

  } catch (err: any) {
    return res
      .status(HttpStatusCodes.BAD_REQUEST)
      .json({
        success: false,
        message:
          err.message ??
          'Failed to create album',
      });
  }
}

/******************************************************************************
                                Export default
******************************************************************************/

export default {
  getAll,
  post,
} as const;