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

function putt(_: Req, res: Res) {
  return res
    .status(HttpStatusCodes.NOT_IMPLEMENTED)
    .json({ message: 'PUT /albums/:id is not implemented yet' });
}

function deletee(_: Req, res: Res) {
  return res
    .status(HttpStatusCodes.NOT_IMPLEMENTED)
    .json({ message: 'DELETE /albums/:id is not implemented yet' });
}

/******************************************************************************
                                Export default
******************************************************************************/

export default {
  getAll,
  post,
  putt,
  deletee,
} as const;