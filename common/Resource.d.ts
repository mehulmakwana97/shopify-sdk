import { HttpService } from "./HttpService";
import { Shopify } from "../Shopify";
export declare class Resource {
    readonly http: HttpService;
    private resourceKey;
    private params;
    private paramsString;
    private paramsData;
    private childResource;
    private config;
    constructor(shopify: Shopify);
    setResourceKey(resourceKey: any, id?: any[]): this;
    setChildResource(childResource: any, cid?: string): this;
    Url(url: any): string;
    setParams(params: any): this;
    setFields(field?: any): this;
    updateOrCreate(data: any): this;
    count(): this;
    ids(id: any): this;
    sinceId(sid: any): this;
    fields(field: any): this;
    limit(lno: any): this;
    get(): Promise<any>;
    post(): Promise<any>;
    put(): Promise<any>;
    delete(): Promise<any>;
}
