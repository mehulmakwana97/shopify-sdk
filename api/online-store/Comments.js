"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Resource_1 = require("../../common/Resource");
class Comments extends Resource_1.Resource {
    constructor(config, id) {
        super(config);
        this.setResourceKey('comments', [id]);
    }
    article(articleId) {
        this.setParams('article_id', articleId);
        return this;
    }
    blog(blogId) {
        this.setParams('blog_id', blogId);
        return this;
    }
    spam() {
        this.setPostResource('spam');
        return this;
    }
    notSpam() {
        this.setPostResource('not_spam');
        return this;
    }
    approve() {
        this.setPostResource('approve');
        return this;
    }
    remove() {
        this.setPostResource('remove');
        return this;
    }
    restore() {
        this.setPostResource('restore');
        return this;
    }
}
exports.Comments = Comments;
