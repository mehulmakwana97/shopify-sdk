"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Resource_1 = require("../../common/Resource");
class Balance extends Resource_1.Resource {
    constructor(config) {
        super(config);
        this.setResourceKey('shopify_payments', ['balance']);
    }
}
exports.Balance = Balance;
