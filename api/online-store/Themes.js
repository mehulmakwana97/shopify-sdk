"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Resource_1 = require("../../common/Resource");
class Themes extends Resource_1.Resource {
    constructor(config, id) {
        super(config);
        this.setResourceKey('themes', [id]);
    }
    /**
     * Retrieves a list of assets for a theme
     */
    asset(id) {
        this.setPostResource('assets', id);
        return this;
    }
    /**
     *	Set asset[key]=key
     */
    ofKey(key) {
        this.setParams('asset[key]', key);
        return this;
    }
    ofThemeId(tid) {
        this.setParams('theme_id', tid);
        return this;
    }
    /**
     * Update/ create asset by value
     */
    updateOrCreateByValue(key, value) {
        this.updateOrCreate({
            asset: {
                key: key,
                value: value,
            }
        });
        return this;
    }
    /**
     * Update/ create asset by attachment
     */
    updateOrCreateByAttachment(key, attachment) {
        this.updateOrCreate({
            asset: {
                key: key,
                attachment: attachment,
            }
        });
        return this;
    }
    /**
     * Update/ create asset by src
     */
    updateOrCreateBySrc(key, src) {
        this.updateOrCreate({
            asset: {
                key: key,
                src: src,
            }
        });
        return this;
    }
    /**
     * Create asset by source_key
     */
    updateOrCreateBySourceKey(key, sourceKey) {
        this.updateOrCreate({
            asset: {
                key: key,
                source_key: sourceKey,
            }
        });
        return this;
    }
}
exports.Themes = Themes;
