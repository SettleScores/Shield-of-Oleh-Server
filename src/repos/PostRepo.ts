import { IPost } from '@src/models/Post.model';

import { PostMongoModel } from '@src/database/models/Post.mongo';

import { mapPost } from '../database/mappers/PostMapper';

/******************************************************************************
                                Functions
******************************************************************************/

/**
 * Get all posts.
 */
export async function getAll(): Promise<IPost[]> {
  const databaseDocuments = await PostMongoModel.find().lean();

  return databaseDocuments.map(mapPost);
}

/******************************************************************************
                                Export default
******************************************************************************/

export default {
  getAll,
} as const;