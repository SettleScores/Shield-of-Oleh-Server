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
   // 1. базова валідація (мінімальна, не DTO layer)
  if (!postDto.title || !postDto.content) {
    throw new Error('Title and content are required');
  }

  // 2. генеруємо базовий slug
  const baseSlug = generateSlug(postDto.title);

  // 3. унікальний slug через окремий slug service
  const slug = await generateUniqueSlug(
    baseSlug,
    (s: string) => PostRepo.existsBySlug(s)
  );

  // 4. створення поста (date ігнорується)
  const post = await PostRepo.post({
    title: postDto.title,
    excerpt: postDto.excerpt,
    content: postDto.content,
    slug,
  } as IPost);

  return post;
}

/******************************************************************************
                                Export default
******************************************************************************/

export default {
  getAll,
  getOne,
  post,
} as const;