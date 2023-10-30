"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_status_codes_1 = __importDefault(require("http-status-codes"));
var ApiResponse = /** @class */ (function () {
    function ApiResponse() {
    }
    ApiResponse.result = function (res, data, message, status) {
        if (status === void 0) { status = 200; }
        res.status(status);
        res.json({
            data: data,
            success: true,
            message: message
        });
    };
    ApiResponse.error = function (res, status, error) {
        if (status === void 0) { status = 400; }
        if (error === void 0) { error = http_status_codes_1.default.getStatusText(status); }
        res.status(status).json({
            message: error,
            success: false,
            data: []
        });
    };
    return ApiResponse;
}());
exports.default = ApiResponse;
