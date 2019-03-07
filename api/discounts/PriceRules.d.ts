import { Resource } from "../../common/Resource";
export declare class PriceRules extends Resource {
    /**
     * Retrieves a list of price rules
     */
    constructor(config: any, id?: string);
    /**
     * Retrieve a list of discount codes or Retrieves a single discount code
     */
    discountCode(id?: string): this;
    /**
     * Retrieves the location of a discount code.
     */
    discountCodeLookup(code: string): this;
    /**
     * Creates/ Retrieves a discount code creation job.
     */
    batch(id?: string): this;
}
