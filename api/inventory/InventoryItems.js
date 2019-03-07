"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Resource_1 = require("../../common/Resource");
class InventoryItems extends Resource_1.Resource {
    /**
     * Retrieves a list of inventory items
     */
    constructor(config, id) {
        super(config);
        this.setResourceKey('inventory_items', [id]);
    }
}
exports.InventoryItems = InventoryItems;
