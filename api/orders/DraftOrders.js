"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Resource_1 = require("../../common/Resource");
class DraftOrders extends Resource_1.Resource {
    /**
     * Draft order.
     */
    constructor(config, id) {
        super(config);
        this.setResourceKey('draft_orders', [id]);
    }
    /**
     * Sends an invoice for the draft order
     */
    sendInvoice() {
        this.setPostResource('send_invoice');
        return this;
    }
    /**
     * Completes a draft order.
     */
    complete() {
        this.setPostResource('complete');
        return this;
    }
}
exports.DraftOrders = DraftOrders;
