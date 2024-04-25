import TransportStream from "winston-transport"
import winston from "winston"
test('create new transport', () => { 
    class MyTransport extends TransportStream {
        constructor(options) {
            super(options);
        }

        log(info, next) {
            console.log(`${new Date()} : ${info.level.toUpperCase()}: ${info.message}`)
            next()
        }
    }

    const logger = winston.createLogger({
        level: "silly",
        transports: [
            new MyTransport({})
        ]
    })

    logger.error("Hello, world!")
    logger.warn("Hello, world!")
    logger.info("Hello, world!")
    logger.http("Hello, world!")
    logger.verbose("Hello, world!")
    logger.debug("Hello, world!")
    logger.silly("Hello, world!")
    
 })