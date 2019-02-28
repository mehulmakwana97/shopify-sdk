import { Resource } from "../../common/Resource";
export declare class Comments extends Resource {
    constructor(config: any, id?: any[]);
    ofArticle(articleId: any): this;
    ofBlog(blogId: any): this;
}
