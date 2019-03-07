"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Resource_1 = require("../../common/Resource");
class ApplicationCredits extends Resource_1.Resource {
    constructor(config, id) {
        super(config);
        this.setResourceKey('application_credits', [id]);
    }
}
exports.ApplicationCredits = ApplicationCredits;
