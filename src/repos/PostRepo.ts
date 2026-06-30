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

export async function post(post: IPost): Promise<IPost> { /// We decided to return da post here
  const createdPost = await PostMongoModel.create(post);

  return mapPost(createdPost.toObject());
}

export async function existsBySlug(slug: string): Promise<boolean> {
  const doc = await PostMongoModel.exists({ slug });
  return !!doc;
}

export async function deletee(slugg: string) {
  const deletedPost = await PostMongoModel
    .findOneAndDelete({ slug: slugg })
    .lean();

  if (deletedPost == null)
    throw new Error('Post database document not found!');
}

export async function put(
  slugg: string,
  replacementPost: IPost
): Promise<IPost> {
  const updatedPost = await PostMongoModel.findOneAndReplace(
    { slug: slugg },
    replacementPost,
    { returnDocument: 'after', lean: true }
);

  if (updatedPost == null)
    throw new Error('Post database document not found!');

  return mapPost(updatedPost);
}

/******************************************************************************
                                Export default
******************************************************************************/

export default {
  getAll,
  getOne,
  post,
  existsBySlug,
  deletee,
  put,
} as const;