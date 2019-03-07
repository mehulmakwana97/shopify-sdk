"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Resource_1 = require("../../common/Resource");
class Blogs extends Resource_1.Resource {
    constructor(config, id) {
        super(config);
        this.setResourceKey('blogs', [id]);
    }
    article(id) {
        this.setPostResource('articles', id);
        return this;
    }
}
exports.Blogs = Blogs;
