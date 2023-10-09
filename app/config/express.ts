import express from 'express';
import application from '../Constants/application';
import indexRoute from '../Routes/index';
import joiErrorHandler from '../Middlewares/joiErrorHandler';
import cors from 'cors';

import * as bodyParser from 'body-parser';
import Authenticate from '../Middlewares/Authenticate';

const app = express();
const morgan = require('morgan');
import { ConnectionManager } from "../utilities/browserPool";
// const ConnectionManager = require('./utilities/browserPool'); // Adjust the path as needed
export const connectionManager = new ConnectionManager();
app.options('*', cors()) // include before other routes

app.use(function(req, res, next) {
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
app.use(express.static('uploads')); 
app.use(morgan('dev'));
app.use(Authenticate);
app.use(application.url.base, indexRoute);
app.use(joiErrorHandler);

export default app;
