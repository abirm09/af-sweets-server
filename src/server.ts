/* eslint-disable no-console */
import mongoose from 'mongoose'
import app from './app'
import config from './config'

const bootstrap = async () => {
  try {
    await mongoose.connect(config.DB_URL as string)
    app.listen(config.PORT, () => {
      console.log(
        `server is started at ${
          config.ENV === 'development'
            ? 'http://localhost:'
            : 'production and port is '
        }${config.PORT}`,
      )
    })
    console.log(`Database is connected at ${config.DB_URL}`)
  } catch (error) {
    console.log(`Failed to connect to database.`, error)
  }
}

bootstrap()
