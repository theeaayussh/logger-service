class Logger {
  constructor(logLevel) {
    this.logLevel = logLevel?.level || "info"
    this.levels = ["error", "warn", "info", "debug"]
  }

  // Function for the logging the logs

  printLog(logLevel, msg) {
    const timeStamp = new Date().toISOString();
    //this condition will ensure that we show only limited loggers which are provide in env file like if it is info then till info we will show not debug as the index of the debug will be more that the env index
    if(this.levels.indexOf(logLevel) <= this.levels.indexOf(this.logLevel)) {
      console.log(`[${timeStamp}] [${logLevel.toUpperCase()}] ${msg}`)
    }
  }

  //Methods

  info(msg) {
    this.printLog("info", msg)
  }

  error(msg) {
    this.printLog("error", msg)
  }

  debug(msg) {
    this.printLog("debug", msg)
  }

  warn(msg) {
    this.printLog("warn", msg)
  }
}

const level = "info"
const logger = new Logger({level: level || "info"});
console.log(logger)

const loggingit = "1234"
logger.info(`hey buddy ${loggingit}`)
