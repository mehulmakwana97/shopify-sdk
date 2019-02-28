"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Resource_1 = require("../../common/Resource");
class Assets extends Resource_1.Resource {
    constructor(config, id = []) {
        super(config);
        this.setResourceKey('assets', id);
    }
    ofTheme(themeId) {
        this.setChildResource('themes', themeId);
        return this;
    }
    ofKey(key) {
        this.setParams(['asset[key]', key]);
        return this;
    }
    ofThemeId(tid) {
        this.setParams(['theme_id', tid]);
        return this;
    }
    updateOrCreateByValue(key, value) {
        this.updateOrCreate({
            asset: {
                key: key,
                value: value,
            }
        });
        return this;
    }
    updateOrCreateByAttachment(key, attachment) {
        this.updateOrCreate({
            asset: {
                key: key,
                attachment: attachment,
            }
        });
        return this;
    }
    updateOrCreateBySrc(key, src) {
        this.updateOrCreate({
            asset: {
                key: key,
                src: src,
            }
        });
        return this;
    }
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
exports.Assets = Assets;
