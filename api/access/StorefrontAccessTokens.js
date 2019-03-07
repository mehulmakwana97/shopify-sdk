"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Resource_1 = require("../../common/Resource");
class StorefrontAccessTokens extends Resource_1.Resource {
    constructor(config, id) {
        super(config);
        this.setResourceKey('storefront_access_tokens', [id]);
    }
}
exports.StorefrontAccessTokens = StorefrontAccessTokens;
