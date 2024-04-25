import winston from "winston";

test("logging with format combine", () => {
    const logger = winston.createLogger({
        level: "info",
        // format: winston.format.json(),
        // format: winston.format.simple(),
        format: winston.format.combine(
            winston.format.timestamp(),
            winston.format.ms(),
            winston.format.json(),
        ),
        transports: [new winston.transports.Console()],
      });

      logger.info("Hello, world!")
      logger.warn("Hello, world!")
      logger.error("Hello, world!")
})