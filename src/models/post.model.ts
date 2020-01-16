import { CommentStatus } from '../enums';
import { PostJson } from '../jsons';
import { CommentStatusMapper } from '../mappers';

export class Post {
  constructor(
    public id: number,
    public date: Date,
    public slug: string,
    public link: string,
    public title: string,
    public content: string,
    public excerpt: string,
    public authorId: number,
    public featuredMediaId: number,
    public commentsStatus: CommentStatus,
    public categoriesId: number[],
    public tagsId: number[]
  ) { }

  static fromJson(jsonPost: PostJson): Post {
    return new Post(
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
    );
  }
}
