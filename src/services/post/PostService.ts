import { IPost } from '@src/models/Post.model';

import PostRepo from '@src/repos/PostRepo';

import { PostDto } from './PostDto';

import { generateSlug } from '@src/common/utils/generation-utils';

import { generateUniqueSlug } from '@src/services/slug.service';

/******************************************************************************
                                Functions
******************************************************************************/

function getAll(): Promise<IPost[]> {
  return PostRepo.getAll();
}

function getOne(slug: string): Promise<IPost> {
  return PostRepo.getOne(slug);
}

async function post(postDto: PostDto): Promise<IPost> { 
  if (!postDto.title || !postDto.content) {
    throw new Error('Title and content are required');
  }
  const baseSlug = generateSlug(postDto.title);

  const slug = await generateUniqueSlug(
    baseSlug,
    (s: string) => PostRepo.existsBySlug(s)
  );

  const post = await PostRepo.post({
    title: postDto.title,
    excerpt: postDto.excerpt,
    content: postDto.content,
    slug,
  } as IPost); /// TODO IPost here should be RrrremoOvd

  return post;
}

function deletee(slug: string): Promise<void> {
  return PostRepo.deletee(slug);
}

async function put(slugg: string, postDto: PostDto): Promise<IPost> {
  /// basic validation
  if (!postDto.title || !postDto.content) {
    throw new Error('Title and content are required');
  }

  const existingPost = await PostRepo.getOne(slugg);

  if (!existingPost) {
    throw new Error('Post not found');
  }

  let slug = existingPost.slug;

  /// if title changed — refreshing slug
  if (postDto.title !== existingPost.title) {
    const baseSlug = generateSlug(postDto.title);

    slug = await generateUniqueSlug(
      baseSlug,
      (s: string) => PostRepo.existsBySlug(s)
    );
  }

  const updatedPost = await PostRepo.put(slugg, {
    title: postDto.title,
    excerpt: postDto.excerpt,
    content: postDto.content,
    slug,
  } as IPost);

  return updatedPost;
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