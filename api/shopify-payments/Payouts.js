"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Resource_1 = require("../../common/Resource");
class Payouts extends Resource_1.Resource {
    constructor(config, id) {
        super(config);
        this.setResourceKey('shopify_payments', ['payouts', id]);
    }
}
exports.Payouts = Payouts;
