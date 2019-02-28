"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = require("./api");
class Shopify {
    static buildConfig(options) {
        const shopify = new Shopify();
        shopify.config = {
            auth: !options.accessToken && `${options.apiKey}:${options.password}`,
            hostname: !options.shopName.endsWith('.myshopify.com')
                ? `${options.shopName}.myshopify.com`
                : options.shopName,
            protocol: 'https:',
            accessToken: options.accessToken,
        };
        return shopify;
    }
    constructor() { }
    article(ids = []) {
        return new api_1.default.Articles(this, ids);
    }
    asset(ids = []) {
        return new api_1.default.Assets(this, ids);
    }
    blog(ids = []) {
        return new api_1.default.Blogs(this, ids);
    }
    comment(ids = []) {
        return new api_1.default.Comments(this, ids);
    }
    page(ids = []) {
        return new api_1.default.Pages(this, ids);
    }
    redirect(ids = []) {
        return new api_1.default.Redirects(this, ids);
    }
    scriptTag(ids = []) {
        return new api_1.default.ScriptTags(this, ids);
    }
    theme(ids = []) {
        return new api_1.default.Themes(this, ids);
    }
    product(ids = []) {
        return new api_1.default.Products(this, ids);
    }
}
exports.Shopify = Shopify;
