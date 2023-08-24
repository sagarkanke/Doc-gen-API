import winston, {LogEntry} from 'winston';
//const chalk = require('chalk');
const MESSAGE = Symbol.for('message');



// @ts-ignore
const LOGGER = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { timestamp: new Date() },
    transports: [
        new winston.transports.Console({

        })
    ],
});

export default LOGGER;
