import { IPost } from '@src/models/Post.model';
import PostRepo from '@src/repos/PostRepo';

/******************************************************************************
                                Functions
******************************************************************************/

function getAll(): Promise<IPost[]> {
  return PostRepo.getAll();
}

function getOne(slug: string): Promise<IPost> {
  return PostRepo.getOne(slug);
}

/******************************************************************************
                                Export default
******************************************************************************/

export default {
  getAll,
  getOne,
} as const;