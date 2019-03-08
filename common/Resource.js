"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HttpService_1 = require("./HttpService");
class Resource {
    constructor(shopify) {
        this.resourceKey = '';
        this.childResource = '';
        this.postResource = '';
        this.params = {};
        this.paramsString = '';
        this.paramsData = {};
        this.config = shopify.config;
        this.http = new HttpService_1.DefaultHttpService(shopify.config);
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
        this.setParams('ids', id);
        return this;
    }
    sinceId(sid) {
        this.setParams('since_id', sid);
        return this;
    }
    fields(field) {
        this.setParams('fields', field);
        return this;
    }
    limit(lno) {
        this.setParams('limit', lno);
        return this;
    }
    setResourceKey(resourceKey, id) {
        this.resourceKey = resourceKey + ((id[0] !== undefined && id.length > 0) ? '/' + id.join('/') : '');
        return this;
    }
    setChildResource(childResource, cid) {
        this.childResource = childResource + (cid !== undefined ? '/' + cid + '/' : '/');
        return this;
    }
    setPostResource(postResource, pid) {
        this.postResource = '/' + postResource + (pid !== undefined ? '/' + pid : '');
        return this;
    }
    Url(params) {
        return `${this.config.protocol}//${this.config.hostname}/admin/${this.childResource.replace(/[\/\/]+/g, '/') + this.resourceKey.replace(/[\/\/]+/g, '/') + this.postResource}.json${params !== undefined ? params : ''}`;
    }
    setParams(key, value) {
        this.params[key] = value;
        return this;
    }
    /**
     * fields: stringify value | object
     */
    setFields(fields) {
        if (typeof fields === "string")
            fields = JSON.parse(fields);
        if (typeof fields === "object") {
            this.paramsString = Object.keys(fields).map(function (props) {
                return `${props}=${encodeURIComponent(fields[props])}`;
            }).join('&');
        }
        return this;
    }
    get() {
        this.setFields(this.params);
        return this.http.GET(this.Url(`${this.paramsString !== '' ? '?' + this.paramsString : ''}`));
    }
    post() {
        return this.http.POST(this.Url(), this.paramsData);
    }
    put() {
        return this.http.PUT(this.Url(), this.paramsData);
    }
    delete() {
        return this.http.DELETE(this.Url());
    }
}
exports.Resource = Resource;
