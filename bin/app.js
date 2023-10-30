"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var LOGGER_1 = __importDefault(require("./config/LOGGER"));
var express_1 = __importDefault(require("./config/express"));
var PORT = process.env.PORT || 4001;
// const ConnectionManager = require('./utilities/browserPool'); // Adjust the path as needed
express_1.default.listen(PORT, function () {
    LOGGER_1.default.info("Server running at ".concat(PORT));
});
