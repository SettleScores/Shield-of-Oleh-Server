import HttpStatusCodes from '@src/common/constants/HttpStatusCodes';
import PostService from '@src/services/PostService';

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

/******************************************************************************
                                Export default
******************************************************************************/

export default {
  getAll,
  getOne
} as const;