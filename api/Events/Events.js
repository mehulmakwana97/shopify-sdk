"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Resource_1 = require("../../common/Resource");
class Events extends Resource_1.Resource {
    /**
     * Retrieves a list of events
     */
    constructor(config, id) {
        super(config);
        this.setResourceKey('events', [id]);
    }
}
exports.Events = Events;
