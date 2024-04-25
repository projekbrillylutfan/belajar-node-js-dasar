import winston from "winston";

test("create new logger with console transport", () => {
  const logger = winston.createLogger({
    transports: [new winston.transports.Console()],
  });

  logger.log({
    level: "error",
    message: "Error Message",
  });
  logger.log({
    level: "warn",
    message: "warning message",
  });
  logger.log({
    level: "info",
    message: "info message",
  });
  logger.log({
    level: "http",
    message: "http message",
  });
  logger.log({
    level: "verbose",
    message: "verbose message",
  });
  logger.log({
    level: "debug",
    message: "debug message",
  });
  logger.log({
    level: "silly",
    message: "silly message",
  });
});
