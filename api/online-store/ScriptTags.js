"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Resource_1 = require("../../common/Resource");
class ScriptTags extends Resource_1.Resource {
    constructor(config, id = []) {
        super(config);
        this.setResourceKey('script_tags', id);
    }
}
exports.ScriptTags = ScriptTags;
