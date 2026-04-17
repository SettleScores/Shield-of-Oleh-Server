import { IPost } from '@src/models/Post.model';
import PostRepo from '@src/repos/PostRepo';

/******************************************************************************
                                Functions
******************************************************************************/

function getAll(): Promise<IPost[]> {
  return PostRepo.getAll();
}

/******************************************************************************
                                Export default
******************************************************************************/

export default {
  getAll,
} as const;