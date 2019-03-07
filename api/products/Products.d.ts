import { Resource } from "../../common/Resource";
export declare class Products extends Resource {
    constructor(config: any, id?: string);
    collectionId(cid: string): this;
    presentmentCurrencies(currency: string): this;
    image(id?: string): this;
    variant(id?: string): this;
}
