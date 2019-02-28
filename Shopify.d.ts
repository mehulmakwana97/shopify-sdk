export interface Config {
    shopName: string;
    accessToken?: string;
    apiKey?: string;
    password?: string;
}
export declare class Shopify {
    config: any;
    static buildConfig(options: Config): Shopify;
    constructor();
    article(ids?: any[]): import("./api/online-store/Articles").Articles;
    asset(ids?: any[]): import("./api/online-store/Assets").Assets;
    blog(ids?: any[]): import("./api/online-store/Blogs").Blogs;
    comment(ids?: any[]): import("./api/online-store/Comments").Comments;
    page(ids?: any[]): import("./api/online-store/Pages").Pages;
    redirect(ids?: any[]): import("./api/online-store/Redirects").Redirects;
    scriptTag(ids?: any[]): import("./api/online-store/ScriptTags").ScriptTags;
    theme(ids?: any[]): import("./api/online-store/Themes").Themes;
    product(ids?: any[]): import("./api/Products").Products;
}
