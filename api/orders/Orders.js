"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Resource_1 = require("../../common/Resource");
class Orders extends Resource_1.Resource {
    /**
     * Retrieves a list of orders
     */
    constructor(config, id) {
        super(config);
        this.setResourceKey('orders', [id]);
    }
    /**
     * Closes an order
     */
    close() {
        this.setPostResource('close');
        return this;
    }
    /**
     * Re-opens a closed order
     */
    open() {
        this.setPostResource('open');
        return this;
    }
    /**
     * Cancels an order. Orders that have a fulfillment object can't be canceled.
     */
    cancel() {
        this.setPostResource('cancel');
        return this;
    }
    /**
     * - Creates an order risk for an order
     * - Retrieves a list of all order risks for an order
     * - Retrieves a single order risk by its ID
     * - Updates an order risk
     * - Deletes an order risk for an order
     */
    risk(id) {
        this.setPostResource('risks', id);
        return this;
    }
    /**
     * - Retrieves a list of refunds for an order.
     * - Retrieves a specific refund by its ID
     * - Creates a refund.
     */
    refund(id) {
        this.setPostResource('refunds', id);
        return this;
    }
    /**
     * - Calculates refund transactions based on line items and shipping.
     */
    refundCalculate() {
        this.setPostResource('calculate');
        return this;
    }
    /**
     * - Retrieves a list of transactions.
     * - Retrieves a specific transaction by its ID
     * - Creates a transaction for an order.
     */
    transaction(id) {
        this.setPostResource('transactions', id);
        return this;
    }
}
exports.Orders = Orders;
