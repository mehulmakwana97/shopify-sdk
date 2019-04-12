import { Resource } from "../../common/Resource";
export declare class Country extends Resource {
    constructor(config: any, id?: string);
    province(id?: string): this;
}
