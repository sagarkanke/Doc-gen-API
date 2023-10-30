"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uri = void 0;
require('dotenv').config(); // Load environment variables from .env file
// Rest of your application code goes here...
exports.uri = process.env.MASTER_DB_URI;
