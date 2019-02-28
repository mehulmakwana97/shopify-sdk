"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Resource_1 = require("../../common/Resource");
class Comments extends Resource_1.Resource {
    constructor(config, id = []) {
        super(config);
        this.setResourceKey('comments', id);
    }
    ofArticle(articleId) {
        this.setParams(['article_id', articleId]);
        return this;
    }
    ofBlog(blogId) {
        this.setParams(['blog_id', blogId]);
        return this;
    }
}
exports.Comments = Comments;
