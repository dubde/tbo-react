import { JsonModel } from './json-interface.model';

export interface PostJson extends JsonModel {
  date: string;
  "date_gmt": string;
  guid: {
    rendered: string
  };
  modified: string;
  "modified_gmt": string;
  slug: string;
  status: string;
  type: string;
  title: {
    rendered: string
  };
  content: {
    rendered: string,
    protected: boolean,
  };
  excerpt: {
    rendered: string,
    protected: boolean,
  };
  author: number;
  "featured_media": number;
  "comment_status": string;
  "ping_status": string;
  sticky: boolean;
  template: string;
  format: string;
  categories?: number[];
  tags?: number[];
  parent?: number;
  "menu_order"?: number;
  meta?;
  "jetpack-related-posts"?: Array<{
    id: number,
    url: string,
    "url_meta": {
      origin: number,
      position: number,
    },
    title: string,
    date: string,
    format: boolean,
    excerpt: string,
    rel: string,
    context: string,
    img: {
      "alt_text": string,
      src: string,
      width: number,
      height: number
    }
  }>;
}
