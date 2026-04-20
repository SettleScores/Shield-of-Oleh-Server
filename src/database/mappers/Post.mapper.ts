import { createMongoMapper } from './createMongoMapper';
import { IPost } from '../../models/Post.model';

export const mapPost = createMongoMapper(
  (databaseDocument): IPost => ({
    id: databaseDocument._id.toString(),
    slug: databaseDocument.slug,
    title: databaseDocument.title,
    excerpt: databaseDocument.excerpt,
    content: databaseDocument.content,
    date: databaseDocument.date,
    imageUrl: databaseDocument.imageUrl,
    created: databaseDocument.created,
  })
);