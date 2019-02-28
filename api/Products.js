"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Resource_1 = require("../common/Resource");
class Products extends Resource_1.Resource {
    constructor(config, id = []) {
        super(config);
        this.setResourceKey('products', id);
    }
    collectionId(cid) {
        this.setParams(['collection_id', cid]);
        return this;
    }
    presentmentCurrencies(currency) {
        this.setParams(['presentment_currencies', currency]);
        return this;
    }
}
exports.Products = Products;
