"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Resource_1 = require("../../common/Resource");
class Articles extends Resource_1.Resource {
    constructor(config) {
        super(config);
        this.setResourceKey('articles');
    }
    author() {
        this.setPostResource('authors');
        return this;
    }
    tag() {
        this.setPostResource('tags');
        return this;
    }
}
exports.Articles = Articles;
