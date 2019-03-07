import { Resource } from "../../common/Resource";
export declare class Customers extends Resource {
    /**
     * Retrieves a list of customers
     */
    constructor(config: any, id?: string);
    /**
     * Searches for customers that match a supplied query
     */
    search(query: string): this;
    /**
     * Creates an account activation URL for a customer
     */
    accountActivationUrl(): this;
    /**
     * Sends an account invite to a customer
     */
    sendInvite(): this;
    /**
     * Retrieves all orders belonging to a customer
     */
    order(): this;
    /**
     * Retrieves a list of addresses for a customer or Retrieves details for a single customer address
     */
    address(aid?: string): this;
    /**
     * Performs bulk operations for multiple customer addresses
     */
    set(): this;
    /**
     * Sets the default address for a customer.
     */
    default(): this;
}
