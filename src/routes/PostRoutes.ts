import HttpStatusCodes from '@src/common/constants/HttpStatusCodes';
import PostService from '@src/services/post/PostService';

import { Req, Res } from './common/express-types';

/******************************************************************************
                                Functions
******************************************************************************/

async function getAll(_: Req, res: Res) {
  const posts = await PostService.getAll();

  res.status(HttpStatusCodes.OK).json(posts);
}

async function getOne(req: Req, res: Res) {
  const { slug } = req.params;

  const post = await PostService.getOne(slug);

  res.status(HttpStatusCodes.OK).json(post);
}

async function post (req: Req, res: Res) {
  try {
    const { title, excerpt, content } = req.body;

    const post = await PostService.post({
      title,
      excerpt,
      content,
    });

    return res.status(HttpStatusCodes.CREATED).json({
      success: true,
      data: post,
    });
  } catch (err: any) { /// TODO Take care about the crap
    return res.status(HttpStatusCodes.BAD_REQUEST).json({
      success: false,
      message: err.message || 'Failed to create post',
    });
  }
}

async function deletee(req: Req, res: Res) {
  const { slug } = req.params;

  try {
    await PostService.deletee(slug);

    return res.sendStatus(HttpStatusCodes.NO_CONTENT);
  } catch (err: any) {
    if (err.message === 'Post database document not found!') {
      return res
        .status(HttpStatusCodes.NOT_FOUND)
        .json({ message: 'Post not found' });
    }

    return res
      .status(HttpStatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: 'Internal server error' });
  }
}

async function put(req: Req, res: Res) { /// TODO Extend with PATCH qqq
  const { slug } = req.params;

  try {
    const { title, excerpt, content } = req.body;

    const post = await PostService.put(slug, {
      title,
      excerpt,
      content,
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
  post,
  deletee,
  put,
} as const;