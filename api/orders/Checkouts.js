"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Resource_1 = require("../../common/Resource");
class Checkouts extends Resource_1.Resource {
    /**
     * Retrieves abandoned checkouts
     */
    constructor(config) {
        super(config);
        this.setResourceKey('checkouts');
    }
}
exports.Checkouts = Checkouts;
