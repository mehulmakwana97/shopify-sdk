"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Resource_1 = require("../../common/Resource");
class CustomerSavedSearches extends Resource_1.Resource {
    /**
     * Retrieves a list of customer saved searches
     */
    constructor(config, id) {
        super(config);
        this.setResourceKey('customer_saved_searches', [id]);
    }
    /**
     * Retrieves all customers returned by a customer saved search.
     */
    customer() {
        this.setPostResource('customers');
        return this;
    }
}
exports.CustomerSavedSearches = CustomerSavedSearches;
