"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Resource_1 = require("../../common/Resource");
class ApplicationCharges extends Resource_1.Resource {
    constructor(config, id) {
        super(config);
        this.setResourceKey('application_charges', [id]);
    }
    activate() {
        this.setPostResource('activate');
        return this;
    }
}
exports.ApplicationCharges = ApplicationCharges;
