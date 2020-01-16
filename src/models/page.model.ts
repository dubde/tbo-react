import { PostJson } from '../jsons';

export class Page {
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
    parentId: number,
    menuOrder: number,
  ) { }

  static fromJson(jsonPost: PostJson): Page {
    return new Page(
      jsonPost.id,
      new Date(jsonPost.date),
      jsonPost.slug,
      jsonPost.link,
      jsonPost.title.rendered,
      jsonPost.content.rendered,
      jsonPost.excerpt.rendered,
      jsonPost.author,
      jsonPost.featured_media,
      jsonPost.parent,
      jsonPost.menu_order
    );
  }
}
