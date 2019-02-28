"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Resource_1 = require("../../common/Resource");
class Themes extends Resource_1.Resource {
    constructor(config, id = []) {
        super(config);
        this.setResourceKey('themes', id);
    }
}
exports.Themes = Themes;
