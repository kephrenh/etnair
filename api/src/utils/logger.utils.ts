import winston from 'winston';

const { createLogger, format, transports } = winston;
const {
  combine, timestamp: winstonTimestamp, label: winstonLabel, printf,
} = format;

const myFormat = printf(
  ({
    level, message, label: formatLabel, timestamp,
  }: any) => `${timestamp} [${formatLabel}] ${level}: ${message}`,
);

const logger = createLogger({
  level: 'info',
  format: combine(
    winstonLabel({ label: 'etnair' }),
    winstonTimestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    winston.format.json(),
    myFormat,
  ),
  transports: [
    new transports.Console({
      format: combine(format.colorize(), myFormat),
    }),
    new transports.File({ filename: 'logs/error.log', level: 'error' }),
    new transports.File({ filename: 'logs/combined.log' }),
  ],
});

export default logger;
