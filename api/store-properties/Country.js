"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Resource_1 = require("../../common/Resource");
class Country extends Resource_1.Resource {
    constructor(config, id) {
        super(config);
        this.setResourceKey('countries', [id]);
    }
    province(id) {
        this.setPostResource('provinces', id);
        return this;
    }
}
exports.Country = Country;
