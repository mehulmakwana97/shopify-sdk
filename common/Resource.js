"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HttpService_1 = require("./HttpService");
class Resource {
    constructor(shopify) {
        this.params = [];
        this.paramsString = undefined;
        this.paramsData = {};
        this.childResource = "";
        this.config = shopify.config;
        this.http = new HttpService_1.DefaultHttpService(shopify.config);
    }
    setResourceKey(resourceKey, id = []) {
        this.resourceKey = resourceKey + (id.length > 0 ? '/' + id.join('/') : '');
        return this;
    }
    setChildResource(childResource, cid) {
        this.childResource = childResource + (cid !== '' ? '/' + cid + '/' : '/');
        return this;
    }
    Url(url) {
        return `${this.config.protocol}//${this.config.hostname}/admin/${url}`;
    }
    setParams(params) {
        this.params.push(params);
        return this;
    }
    setFields(field = null) {
        if (Array.isArray(field)) {
            let params = [];
            field.forEach((value, index) => {
                params.push(value.join('='));
            });
            this.paramsString = params.join('&');
        }
        else {
            this.paramsString = field;
        }
        return this;
    }
    updateOrCreate(data) {
        this.paramsData = data;
        return this;
    }
    count() {
        this.resourceKey = this.resourceKey + '/count';
        return this;
    }
    ids(id) {
        this.setParams(['ids', id]);
        return this;
    }
    sinceId(sid) {
        this.setParams(['since_id', sid]);
        return this;
    }
    fields(field) {
        this.setParams(['fields', field]);
        return this;
    }
    limit(lno) {
        this.setParams(['limit', lno]);
        return this;
    }
    get() {
        this.setFields(this.params);
        return this.http.GET(this.Url(`${this.childResource + this.resourceKey}.json${this.paramsString ? '?' + this.paramsString : ''}`));
    }
    post() {
        return this.http.POST(this.Url(`${this.childResource + this.resourceKey}.json`), this.paramsData);
    }
    put() {
        return this.http.PUT(this.Url(`${this.childResource + this.resourceKey}.json`), this.paramsData);
    }
    delete() {
        return this.http.DELETE(this.Url(`${this.childResource + this.resourceKey}.json`));
    }
}
exports.Resource = Resource;
