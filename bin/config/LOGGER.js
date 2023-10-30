"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var winston_1 = __importDefault(require("winston"));
//const chalk = require('chalk');
var MESSAGE = Symbol.for('message');
// @ts-ignore
var LOGGER = winston_1.default.createLogger({
    level: 'info',
    format: winston_1.default.format.json(),
    defaultMeta: { timestamp: new Date() },
    transports: [
        new winston_1.default.transports.Console({})
    ],
});
exports.default = LOGGER;
