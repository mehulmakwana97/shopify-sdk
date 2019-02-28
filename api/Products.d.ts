import { Resource } from "../common/Resource";
import { Shopify } from "../Shopify";
export declare class Products extends Resource {
    constructor(config: Shopify, id?: any[]);
    collectionId(cid: any): this;
    presentmentCurrencies(currency: any): this;
}
