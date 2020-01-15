import { JsonModel } from './json-interface.model';

export interface Taxonomy extends JsonModel {
    count: number,
    description: string,
    name: string,
    slug: string,
    taxonomy: string,
    meta?: []
}