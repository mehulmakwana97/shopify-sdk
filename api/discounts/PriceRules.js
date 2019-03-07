"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Resource_1 = require("../../common/Resource");
class PriceRules extends Resource_1.Resource {
    /**
     * Retrieves a list of price rules
     */
    constructor(config, id) {
        super(config);
        this.setResourceKey('price_rules', [id]);
    }
    /**
     * Retrieve a list of discount codes or Retrieves a single discount code
     */
    discountCode(id) {
        this.setPostResource('discount_codes', id);
        return this;
    }
    /**
     * Retrieves the location of a discount code.
     */
    discountCodeLookup(code) {
        this.setResourceKey('discount_codes');
        this.setPostResource('lookup');
        this.setParams('code', code);
        return this;
    }
    /**
     * Creates/ Retrieves a discount code creation job.
     */
    batch(id) {
        this.setPostResource('batch', id);
        return this;
    }
}
exports.PriceRules = PriceRules;
