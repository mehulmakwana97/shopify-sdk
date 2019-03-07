"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Resource_1 = require("../../common/Resource");
class RecurringApplicationCharges extends Resource_1.Resource {
    constructor(config, id) {
        super(config);
        this.setResourceKey('recurring_application_charges', [id]);
    }
    activate() {
        this.setPostResource('activate');
        return this;
    }
    customize() {
        this.setPostResource('customize');
        return this;
    }
    usageCharge(cid) {
        this.setPostResource('usage_charges', cid);
        return this;
    }
}
exports.RecurringApplicationCharges = RecurringApplicationCharges;
