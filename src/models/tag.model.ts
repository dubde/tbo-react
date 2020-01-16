import { Taxonomy } from '../jsons';

export class Tag {
  constructor(
    id: number,
    count: number,
    name: string,
    slug: string,
    description?: string
  ) { }

  static fromJson(json: Taxonomy): Tag | undefined {
    return json.taxonomy === 'post_tag' ? new Tag(json.id, json.count, json.name, json.slug, json.description) : undefined;
  }
}
