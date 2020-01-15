import { CommentStatus } from '../enums';
import { PostJson } from '../jsons';
import { CommentStatusMapper } from '../mappers';

export class Post {
  constructor(
    id: number,
    date: Date,
    slug: string,
    link: string,
    title: string,
    content: string,
    excerpt: string,
    authorId: number,
    featuredMediaId: number,
    commentsStatus: CommentStatus,
    categoriesId: number[],
    tagsId: number[]
  ) { }

  static fromJson(jsonPost: PostJson): Post {
    return jsonPost.type === 'post' ? new Post(
      jsonPost.id,
      new Date(jsonPost.date),
      jsonPost.slug,
      jsonPost.link,
      jsonPost.title.rendered,
      jsonPost.content.rendered,
      jsonPost.excerpt.rendered,
      jsonPost.author,
      jsonPost.featured_media,
      CommentStatusMapper.fromJson(jsonPost.comment_status),
      jsonPost.categories,
      jsonPost.tags
    ) : undefined;
  }
}
