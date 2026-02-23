class LoggerService {
  constructor(level = "info") {
    this.level = level;
    this.levels = ["error", "warn", "info", "debug"];
  }

  log(level, message, meta = {}) {
    if (this.levels.indexOf(level) <= this.levels.indexOf(this.level)) {
      const timestamp = new Date().toISOString();
      const logMsg = `[${timestamp}] [${level.toUpperCase()}] ${message}`;

      switch (level) {
        case "error":
          console.error(logMsg, Object.keys(meta).length ? meta : "");
          break;
        case "warn":
          console.warn(logMsg, Object.keys(meta).length ? meta : "");
          break;
        default:
          console.log(logMsg, Object.keys(meta).length ? meta : "");
      }
    }
  }

  info(msg, meta) { this.log("info", msg, meta); }
  error(msg, meta) { this.log("error", msg, meta); }
  warn(msg, meta) { this.log("warn", msg, meta); }
  debug(msg, meta) { this.log("debug", msg, meta); }

  setLevel(newLevel) {
    if (this.levels.includes(newLevel)) {
      this.level = newLevel;
      this.info(`Log level updated to '${newLevel}'`);
    } else {
      this.warn(`Invalid log level '${newLevel}' — keeping '${this.level}'`);
    }
  }
}

const logger = new LoggerService(process.env.LOG_LEVEL || "info");

export default logger;
