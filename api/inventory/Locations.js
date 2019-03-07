"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Resource_1 = require("../../common/Resource");
class Locations extends Resource_1.Resource {
    /**
     * Retrieves a list of locations
     */
    constructor(config, id) {
        super(config);
        this.setResourceKey('locations', [id]);
    }
    /**
     * Retrieves a list of inventory levels for a location
     */
    inventoryLevel() {
        this.setPostResource('inventory_levels');
        return this;
    }
}
exports.Locations = Locations;
