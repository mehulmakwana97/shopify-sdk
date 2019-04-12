"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Resource_1 = require("../../common/Resource");
class ShippingZone extends Resource_1.Resource {
    constructor(config) {
        super(config);
        this.setResourceKey('shipping_zones');
    }
}
exports.ShippingZone = ShippingZone;
