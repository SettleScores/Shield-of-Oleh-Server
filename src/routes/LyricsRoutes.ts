import HttpStatusCodes from '@src/common/constants/HttpStatusCodes';
import LyricsService from '@src/services/lyrics/LyricsService';

import { Req, Res } from './common/express-types';

/******************************************************************************
                                Functions
******************************************************************************/

async function getAll(_: Req, res: Res) {
  const lyrics = await LyricsService.getAll();

  res.status(HttpStatusCodes.OK).json(lyrics);
}

async function getOne(req: Req, res: Res) {
  const { slug } = req.params;

  const lyrics = await LyricsService.getOne(slug);

  res.status(HttpStatusCodes.OK).json(lyrics);
}

async function deletee(req: Req, res: Res) {
  const { slug } = req.params;

  try {
    await LyricsService.deletee(slug);

    return res.sendStatus(HttpStatusCodes.NO_CONTENT);
  } catch (err: any) {
    if (err.message === 'Lyrics database document not found!') {
      return res
        .status(HttpStatusCodes.NOT_FOUND)
        .json({ message: 'Lyrics not found' });
    }

    return res
      .status(HttpStatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: 'Internal server error' });
  }
}

async function putt(req: Req, res: Res) { /// TODO Extend with PATCH qqq
  const { slug } = req.params;

  try {
    const { title, albumTitle, text } = req.body;

    const post = await LyricsService.putt(slug, {
      title,
      albumTitle,
      text,
    });

    return res.status(HttpStatusCodes.OK).json({
      success: true,
      data: post,
    });
  } catch (err: any) { /// TODO ImproOve
    if (err.message === 'Post database document not found!') { /// maybe extract constant
      return res.status(HttpStatusCodes.NOT_FOUND).json({
        success: false,
        message: 'Post not found',
      });
    }

    return res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: err.message || 'Failed to update post',
    });
  }
}

/******************************************************************************
                                Export default
******************************************************************************/

export default {
  getAll,
  getOne,
  deletee,
  putt,
} as const;