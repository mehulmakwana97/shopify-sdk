import { Resource } from "../../common/Resource";
export declare class Comments extends Resource {
    constructor(config: any, id?: string);
    article(articleId: string): this;
    blog(blogId: string): this;
    spam(): this;
    notSpam(): this;
    approve(): this;
    remove(): this;
    restore(): this;
}
