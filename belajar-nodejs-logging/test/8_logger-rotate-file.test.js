import winston from "winston"
import DailyRotatingFile from "winston-daily-rotate-file"

test('logging with daily rotate file', () => { 
    const logger = winston.createLogger({
        level: "info",
        transports: [
            new winston.transports.Console({}),
            new DailyRotatingFile({
                filename: "app-%DATE%.log",
                zippedArchive: true,
                maxSize: "100m",
                maxFiles: "14d"
            })
        ]
    })

    for (let i = 0; i< 100000; i++) {
        logger.info(`Hello, world! ke ${i}`)
    }
 })