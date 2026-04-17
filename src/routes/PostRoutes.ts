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

/******************************************************************************
                                Export default
******************************************************************************/

export default {
  getAll,
} as const;