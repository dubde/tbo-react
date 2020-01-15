export interface JsonModel {
    id: number,
    link: string,
    "_links": {
        collection: Array<{ href: string, embeddable?: boolean }>,
        author: Array<{ href: string, embeddable?: boolean }>
    },
    "_embedded"?: {}
}