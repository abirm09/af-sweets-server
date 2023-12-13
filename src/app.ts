import compression from 'compression'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import express, { Application } from 'express'
import helmet from 'helmet'
import morgan from 'morgan'
import config from './config'
import settings from './settings/settings.json'

const app: Application = express()

// cors config
const corsConfig = {
  origin: settings.client_side_urls,
  credentials: true,
}

// Middlewares
app.use(cors(corsConfig))
app.use(helmet())
app.use(express.json())
app.use(compression())
app.use(cookieParser())
if (config.ENV === 'development') {
  app.use(morgan('dev'))
}
// Application api's

export default app
