import { MediaJson } from "../jsons/media-json.model";

export class ImageMedia {

    constructor(
        public date: string,
        public guid: string,
        public modified: string,
        public slug: string,
        public status: string,
        public type: string,
        public title: string,
        public author: number,
        public template: string,
        public format: string,
        public meta: [],
        public post: number,
        public src: string,
    ) { }

    static fromJson(mediaJson: MediaJson): ImageMedia {
        return new ImageMedia(
            mediaJson.date,
            mediaJson.guid.rendered,
            mediaJson.modified,
            mediaJson.slug,
            mediaJson.status,
            mediaJson.type,
            mediaJson.title.rendered,
            mediaJson.author,
            mediaJson.template,
            mediaJson.format,
            mediaJson.meta,
            mediaJson.post,
            mediaJson.source_url
        );
    }
}