"use strict";
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
var celebrate_1 = require("celebrate");
exports.default = {
    add: (_a = {},
        _a[celebrate_1.Segments.BODY] = {
            title: celebrate_1.Joi.string().required(),
            author: celebrate_1.Joi.string().required(),
            summary: celebrate_1.Joi.string().optional(),
        },
        _a),
    edit: (_b = {},
        _b[celebrate_1.Segments.BODY] = {
            id: celebrate_1.Joi.string().required(),
            title: celebrate_1.Joi.string().required(),
            author: celebrate_1.Joi.string().required(),
            summary: celebrate_1.Joi.string().optional(),
        },
        _b),
    id: (_c = {},
        _c[celebrate_1.Segments.QUERY] = {
            id: celebrate_1.Joi.string().required(),
        },
        _c),
};
