"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DefaultHttpClient_1 = require("./DefaultHttpClient");
const Constants = require("./Constants");
class DefaultHttpService {
    constructor(config, client = DefaultHttpClient_1.defaultAxios) {
        this.config = config;
        this.client = client;
        this.headers(config);
    }
    headers(config) {
        this.client.defaults.headers.common[Constants.HEADER_XORIGIN] = `${config.protocol}//${config.hostname}`;
        if (config.accessToken)
            this.client.defaults.headers.common[Constants.SHOP_ACCESS_TOKEN] = config.accessToken;
        if (config.auth)
            this.client.defaults.headers.common[Constants.AUTHORIZATION] = `Basic ${btoa(config.auth)}`;
    }
    GET(path, config) {
        this.headers(this.config);
        return this.client.get(path, config).then(payload => payload.data, payload => Promise.reject(payload.response));
    }
    POST(path, data, config) {
        this.headers(this.config);
        return this.client.post(path, data, config).then(payload => payload.data, payload => Promise.reject(payload.response));
    }
    PUT(path, data, config) {
        this.headers(this.config);
        return this.client.put(path, data, config).then(payload => payload.data, payload => Promise.reject(payload.response));
    }
    DELETE(path, config) {
        this.headers(this.config);
        return this.client.delete(path, config).then(payload => payload.data, payload => Promise.reject(payload.response));
    }
}
exports.DefaultHttpService = DefaultHttpService;
