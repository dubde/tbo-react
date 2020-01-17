import { JsonModel } from "./json-interface.model";

export interface MediaJson extends JsonModel {
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
    author: number;
    "comment_status": string;
    "ping_status": string;
    template: string;
    format: string;
    tags: number[];
    meta: [];
    post: number;
    "source_url": string;
}