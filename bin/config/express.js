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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var application_1 = __importDefault(require("../Constants/application"));
var index_1 = __importDefault(require("../Routes/index"));
var joiErrorHandler_1 = __importDefault(require("../Middlewares/joiErrorHandler"));
var cors_1 = __importDefault(require("cors"));
var bodyParser = __importStar(require("body-parser"));
var Authenticate_1 = __importDefault(require("../Middlewares/Authenticate"));
var config_1 = require("../config");
var mongoose = require('mongoose');
var app = (0, express_1.default)();
var morgan = require('morgan');
mongoose.connect(config_1.uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
var db = mongoose.connection;
db.on('error', function (err) {
    console.error("MongoDB connection error: ".concat(err));
});
db.once('open', function () {
    console.log('Connected to MongoDB');
});
// const ConnectionManager = require('./utilities/browserPool'); // Adjust the path as needed
app.options('*', (0, cors_1.default)()); // include before other routes
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'DELETE, PUT, GET, POST');
    res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
    res.header('Expires', '-1');
    res.header('Pragma', 'no-cache');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, token_access, user_id, User-agent");
    res.header('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
    next();
});
// Router
require('dotenv').config();
app.use(bodyParser.json());
app.use(express_1.default.static('uploads'));
app.use(morgan('dev'));
app.use(Authenticate_1.default);
app.use(application_1.default.url.base, index_1.default);
app.use(joiErrorHandler_1.default);
exports.default = app;
