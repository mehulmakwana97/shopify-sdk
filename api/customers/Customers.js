"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Resource_1 = require("../../common/Resource");
class Customers extends Resource_1.Resource {
    /**
     * Retrieves a list of customers
     */
    constructor(config, id) {
        super(config);
        this.setResourceKey('customers', [id]);
    }
    /**
     * Searches for customers that match a supplied query
     */
    search(query) {
        this.setPostResource('search');
        this.setParams('query', query);
        return this;
    }
    /**
     * Creates an account activation URL for a customer
     */
    accountActivationUrl() {
        this.setPostResource('account_activation_url');
        return this;
    }
    /**
     * Sends an account invite to a customer
     */
    sendInvite() {
        this.setPostResource('send_invite');
        return this;
    }
    /**
     * Retrieves all orders belonging to a customer
     */
    order() {
        this.setPostResource('orders');
        return this;
    }
    /**
     * Retrieves a list of addresses for a customer or Retrieves details for a single customer address
     */
    address(aid) {
        this.setPostResource('addresses', aid);
        return this;
    }
    /**
     * Performs bulk operations for multiple customer addresses
     */
    set() {
        this.setPostResource('addresses');
        return this;
    }
    /**
     * Sets the default address for a customer.
     */
    default() {
        this.setPostResource('default');
        return this;
    }
}
exports.Customers = Customers;
