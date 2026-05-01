import { IPost } from '@src/models/Post.model';

import { PostMongoModel } from '@src/database/models/Post.mongo';

import { mapPost } from '../database/mappers/Post.mapper';

/******************************************************************************
                                Functions
******************************************************************************/
export async function getAll(): Promise<IPost[]> {
  const postDatabaseDocuments = await PostMongoModel.find().lean();

  return postDatabaseDocuments.map(mapPost);
}

export async function getOne(slugg: string): Promise<IPost> {
  const postDatabaseDocument = await PostMongoModel.findOne( {slug: slugg} ).lean();

  if (postDatabaseDocument == null)
    throw new Error('Post database document not found!');

  return mapPost(postDatabaseDocument);
}

/******************************************************************************
                                Export default
******************************************************************************/

export default {
  getAll,
  getOne,
} as const;