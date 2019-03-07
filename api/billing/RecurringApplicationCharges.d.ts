import { Resource } from "../../common/Resource";
export declare class RecurringApplicationCharges extends Resource {
    constructor(config: any, id?: string);
    activate(): this;
    customize(): this;
    usageCharge(cid?: string): this;
}
