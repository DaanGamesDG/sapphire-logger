import { LogLevel } from "@sapphire/framework";
import { Logger } from "../src";
const logger = new Logger({ level: LogLevel.Trace });
logger.info("Hello");
logger.debug("Hello");
logger.trace("Hello");
logger.error("Hello");
logger.warn("Hello");
logger.fatal("Hello");
