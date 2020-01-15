import { PostJson } from '../jsons';

export class Page {
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
    public parentId: number,
    public menuOrder: number,
  ) { }

  static fromJson(jsonPost: PostJson): Page {
    return jsonPost.type === 'page' ? new Page(
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
    ) : undefined;
  }
}
