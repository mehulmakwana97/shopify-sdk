"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Resource_1 = require("../../common/Resource");
class Pages extends Resource_1.Resource {
    constructor(config, id) {
        super(config);
        this.setResourceKey('pages', [id]);
    }
}
exports.Pages = Pages;
