import { Resource } from "../../common/Resource";
export declare class Assets extends Resource {
    constructor(config: any, id?: any[]);
    ofTheme(themeId: any): this;
    ofKey(key: any): this;
    ofThemeId(tid: any): this;
    updateOrCreateByValue(key: any, value: any): this;
    updateOrCreateByAttachment(key: any, attachment: any): this;
    updateOrCreateBySrc(key: any, src: any): this;
    updateOrCreateBySourceKey(key: any, sourceKey: any): this;
}
