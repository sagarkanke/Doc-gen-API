"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var HttpStatus = __importStar(require("http-status-codes"));
var celebrate_1 = require("celebrate");
/**
 * Joi error handler middleware
 *
 * @param {object} err
 * @param {object} req
 * @param {object} res
 * @param {function} next
 *
 */
exports.default = (function (err, req, res, next) {
    if ((0, celebrate_1.isCelebrateError)(err)) {
        var details_1 = [];
        err.details.forEach(function (error1) {
            return error1.details.forEach(function (value) { return details_1.push(value.message); });
        });
        var error = details_1.join(',').replace(/"/g, '').replace(/\\/g, '');
        return res.status(HttpStatus.BAD_REQUEST).json({
            message: error,
            success: false,
            results: []
        });
    }
    // If this isn't a Joi error, send it to the next error handler
    return next(err);
});
