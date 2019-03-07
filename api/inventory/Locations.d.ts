import { Resource } from "../../common/Resource";
export declare class Locations extends Resource {
    /**
     * Retrieves a list of locations
     */
    constructor(config: any, id?: string);
    /**
     * Retrieves a list of inventory levels for a location
     */
    inventoryLevel(): this;
}
