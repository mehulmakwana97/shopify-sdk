"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Resource_1 = require("../../common/Resource");
class Metafields extends Resource_1.Resource {
    /**
     * Retrieves a list of metafields that belong to a resource
     */
    constructor(config, id) {
        super(config);
        this.setResourceKey('metafields', [id]);
    }
}
exports.Metafields = Metafields;
