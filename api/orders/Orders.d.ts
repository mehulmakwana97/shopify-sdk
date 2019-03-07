import { Resource } from "../../common/Resource";
export declare class Orders extends Resource {
    /**
     * Retrieves a list of orders
     */
    constructor(config: any, id?: string);
    /**
     * Closes an order
     */
    close(): this;
    /**
     * Re-opens a closed order
     */
    open(): this;
    /**
     * Cancels an order. Orders that have a fulfillment object can't be canceled.
     */
    cancel(): this;
    /**
     * - Creates an order risk for an order
     * - Retrieves a list of all order risks for an order
     * - Retrieves a single order risk by its ID
     * - Updates an order risk
     * - Deletes an order risk for an order
     */
    risk(id?: string): this;
    /**
     * - Retrieves a list of refunds for an order.
     * - Retrieves a specific refund by its ID
     * - Creates a refund.
     */
    refund(id?: string): this;
    /**
     * - Calculates refund transactions based on line items and shipping.
     */
    refundCalculate(): this;
    /**
     * - Retrieves a list of transactions.
     * - Retrieves a specific transaction by its ID
     * - Creates a transaction for an order.
     */
    transaction(id?: string): this;
}
