import { HttpService } from "./HttpService";
import { Shopify } from "../Shopify";
export interface Props {
    updateOrCreate: (data: object) => this;
    count: () => this;
    ids: (id: string) => this;
    sinceId: (sid: string) => this;
    fields: (field: string) => this;
    limit: (lno: string) => this;
    setResourceKey: (resourceKey: string, id?: any[]) => this;
    setChildResource: (childResource: string, cid?: string) => this;
    setPostResource: (postResource: string, pid?: string) => this;
    setParams: (key: string, value: string) => this;
    setFields: (fields: string | object) => this;
    get<T>(): Promise<T>;
    post<T>(): Promise<T>;
    put<T>(): Promise<T>;
    delete<T>(): Promise<T>;
}
export declare class Resource implements Props {
    readonly http: HttpService;
    private resourceKey;
    private childResource?;
    private postResource?;
    private params?;
    private paramsString?;
    private paramsData?;
    private config?;
    constructor(shopify: Shopify);
    updateOrCreate(data: object): this;
    count(): this;
    ids(id: string): this;
    sinceId(sid: string): this;
    fields(field: string): this;
    limit(lno: string): this;
    setResourceKey(resourceKey: string, id?: any[]): this;
    setChildResource(childResource: string, cid?: string): this;
    setPostResource(postResource: string, pid?: string): this;
    private Url;
    setParams(key: string, value: string): this;
    /**
     * fields: stringify value | object
     */
    setFields(fields: string | object): this;
    get(): Promise<any>;
    post(): Promise<any>;
    put(): Promise<any>;
    delete(): Promise<any>;
}
