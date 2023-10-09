'use strict'
const awsServerlessExpress = require('aws-serverless-express');
import app  from "./app/config/express";
const server = awsServerlessExpress.createServer(app);
//@ts-ignore
exports.handler = (event, context) => awsServerlessExpress.proxy(server, event, context);