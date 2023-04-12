import winston from 'winston';

const logger = winston.createLogger({
    level: 'debug',
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json()
    ),
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({
            filename: 'error.log', level: 'warn',
            dirname: 'log'
        }),
        new winston.transports.File({
            filename: 'log.log', level: 'info',
            dirname: 'log'
        })
    ]
});

export { logger };
