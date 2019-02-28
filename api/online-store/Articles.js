"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Resource_1 = require("../../common/Resource");
class Articles extends Resource_1.Resource {
    constructor(config, id = []) {
        super(config);
        this.setResourceKey('articles', id);
    }
    ofBlog(blogId) {
        this.setChildResource('blogs', blogId);
        return this;
    }
}
exports.Articles = Articles;
