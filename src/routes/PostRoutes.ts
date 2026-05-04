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
  console.log('qqq____PostRoutes post req: ', req.body);

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

/******************************************************************************
                                Export default
******************************************************************************/

export default {
  getAll,
  getOne,
  post
} as const;