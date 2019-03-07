"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Resource_1 = require("../../common/Resource");
class MarketingEvents extends Resource_1.Resource {
    /**
     * Retrieves a list of marketing events
     */
    constructor(config, id) {
        super(config);
        this.setResourceKey('marketing_events', [id]);
    }
    engagement() {
        this.setPostResource('engagements');
        return this;
    }
}
exports.MarketingEvents = MarketingEvents;
