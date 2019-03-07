"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Resource_1 = require("../../common/Resource");
class InventoryLevels extends Resource_1.Resource {
    /**
     * Retrieves a list of inventory levels
     */
    constructor(config, id) {
        super(config);
        this.setResourceKey('inventory_levels', [id]);
    }
    /**
     * Adjusts the inventory level of an inventory item at a single location
     */
    adjust() {
        this.setPostResource('adjust');
        return this;
    }
    /**
     * Connects an inventory item to a location by creating an inventory level at that location.
     */
    connect() {
        this.setPostResource('connect');
        return this;
    }
    /**
     * Sets the inventory level for an inventory item at a location.
     */
    set() {
        this.setPostResource('set');
        return this;
    }
}
exports.InventoryLevels = InventoryLevels;
