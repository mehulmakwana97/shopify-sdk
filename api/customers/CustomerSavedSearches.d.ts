import { Resource } from "../../common/Resource";
export declare class CustomerSavedSearches extends Resource {
    /**
     * Retrieves a list of customer saved searches
     */
    constructor(config: any, id?: string);
    /**
     * Retrieves all customers returned by a customer saved search.
     */
    customer(): this;
}
