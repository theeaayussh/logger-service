import logger from "./index.js";

logger.info("Server started", { port: 4000 });
logger.warn("Memory usage high");
logger.error("Database connection failed", { error: "timeout" });
logger.debug("Cache cleared");
