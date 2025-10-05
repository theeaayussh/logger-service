class LoggerService {
  constructor(level = "info") {
    this.level = level;
    this.levels = ["error", "warn", "info", "debug"];
  }

  log(level, message, meta = {}) {
    // Only log if message level >= configured level
    if (this.levels.indexOf(level) <= this.levels.indexOf(this.level)) {
      const timestamp = new Date().toISOString();
      const logMsg = `[${timestamp}] [${level.toUpperCase()}] ${message}`;

      // Choose console method based on log level
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

  // Convenience methods
  info(msg, meta) { this.log("info", msg, meta); }
  error(msg, meta) { this.log("error", msg, meta); }
  warn(msg, meta) { this.log("warn", msg, meta); }
  debug(msg, meta) { this.log("debug", msg, meta); }

  // Dynamically update log level (e.g. from DB)
  setLevel(newLevel) {
    if (this.levels.includes(newLevel)) {
      this.level = newLevel;
      this.info(`Log level updated to '${newLevel}'`);
    } else {
      this.warn(`Invalid log level '${newLevel}' — keeping '${this.level}'`);
    }
  }
}


 //Created a single shared instance (singleton) Controlled via environment variable LOG_LEVEL

const logger = new LoggerService(process.env.LOG_LEVEL || "info");

export default logger;
