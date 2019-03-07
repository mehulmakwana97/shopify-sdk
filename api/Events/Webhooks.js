"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Resource_1 = require("../../common/Resource");
class Webhooks extends Resource_1.Resource {
    /**
     * Retrieves a list of Webhooks
     */
    constructor(config, id) {
        super(config);
        this.setResourceKey('webhooks', [id]);
    }
}
exports.Webhooks = Webhooks;
