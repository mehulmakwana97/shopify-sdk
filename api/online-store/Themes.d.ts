import { Resource } from "../../common/Resource";
export declare class Themes extends Resource {
    constructor(config: any, id?: string);
    /**
     * Retrieves a list of assets for a theme
     */
    asset(id?: string): this;
    /**
     *	Set asset[key]=key
     */
    ofKey(key: string): this;
    ofThemeId(tid: string): this;
    /**
     * Update/ create asset by value
     */
    updateOrCreateByValue(key: string, value: string): this;
    /**
     * Update/ create asset by attachment
     */
    updateOrCreateByAttachment(key: string, attachment: string): this;
    /**
     * Update/ create asset by src
     */
    updateOrCreateBySrc(key: string, src: string): this;
    /**
     * Create asset by source_key
     */
    updateOrCreateBySourceKey(key: string, sourceKey: string): this;
}
