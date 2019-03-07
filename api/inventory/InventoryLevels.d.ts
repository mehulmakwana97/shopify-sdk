import { Resource } from "../../common/Resource";
export declare class InventoryLevels extends Resource {
    /**
     * Retrieves a list of inventory levels
     */
    constructor(config: any, id?: string);
    /**
     * Adjusts the inventory level of an inventory item at a single location
     */
    adjust(): this;
    /**
     * Connects an inventory item to a location by creating an inventory level at that location.
     */
    connect(): this;
    /**
     * Sets the inventory level for an inventory item at a location.
     */
    set(): this;
}
