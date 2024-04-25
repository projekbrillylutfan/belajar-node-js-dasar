import winston from "winston";

const callAsync = async() => {
    return Promise.reject("ups");
}

const logger = winston.createLogger({
    level: "info",
    transports: [
        new winston.transports.File({
            handleRejections: true,
            handleExceptions: true,
            filename: "rejection.log"
        })
    ]
})

callAsync()