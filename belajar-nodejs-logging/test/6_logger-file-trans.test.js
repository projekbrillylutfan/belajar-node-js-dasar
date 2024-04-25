import winston from "winston"

test('logging with file transport', () => { 
    const logger = winston.createLogger({
        level: "info",
        transports: [
            new winston.transports.Console({}),
            new winston.transports.File({
                filename: 'application.log'
            })
        ]
    })

    logger.info("Hello, world!")
    logger.info("Hello, world!")
    logger.info("Hello, world!")
 })