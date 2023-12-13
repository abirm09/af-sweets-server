import mongoose from "mongoose"
import app from "./app"
import config from "./config"
import { errorLogger, logger } from "./shared/logger"

const bootstrap = async () => {
  try {
    await mongoose.connect(config.DB_URL as string)
    app.listen(config.PORT, () => {
      logger.info(
        `server is started at ${
          config.ENV === "development"
            ? "http://localhost:"
            : "production and port is "
        }${config.PORT}`,
      )
    })
    logger.info(`Database is connected successfully`)
  } catch (error) {
    errorLogger.error(`Failed to connect to database.`, error)
  }
}

bootstrap()
