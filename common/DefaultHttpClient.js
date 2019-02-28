"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const Constants = require("./Constants");
const instance = axios_1.default.create();
instance.defaults.headers.common[Constants.CONTENT_TYPE] = 'application/x-www-form-urlencoded';
exports.defaultAxios = instance;
