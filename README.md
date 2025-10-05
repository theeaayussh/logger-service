# Logger Service

**Logger Service** is a lightweight, configurable logging utility for Node.js.
It provides simple methods for logging messages with different levels (`info`, `warn`, `error`, `debug`) and timestamps.
The logger is implemented as a singleton, so the same instance can be used across your project.

---

## Features

- Simple API: `info`, `warn`, `error`, `debug`
- Configurable log levels via environment variable or runtime
- Singleton instance (shared across the project)
- Logs include timestamps
- Optional metadata support

---

## Installation / Setup

Since this is a personal project, you can simply require it by path:

```js
const createLogger = require("./index"); // path to your logger module
const logger = createLogger();
