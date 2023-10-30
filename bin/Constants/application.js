"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var base = '/api';
exports.default = {
    url: {
        base: base,
    },
    timers: {},
    env: {},
    authorizationIgnorePath: [
        "".concat(base, "/login"),
    ],
};
