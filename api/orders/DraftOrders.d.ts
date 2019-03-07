import { Resource } from "../../common/Resource";
export declare class DraftOrders extends Resource {
    /**
     * Draft order.
     */
    constructor(config: any, id?: string);
    /**
     * Sends an invoice for the draft order
     */
    sendInvoice(): this;
    /**
     * Completes a draft order.
     */
    complete(): this;
}
