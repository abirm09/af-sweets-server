import compression from "compression"
import cookieParser from "cookie-parser"
import cors from "cors"
import express, { Application } from "express"
import helmet from "helmet"
import morgan from "morgan"
import globalErrorhandler from "./app/middlewares/globalErrorHandler"
import config from "./config"
import { invalidEndPoints } from "./errors/invalidEndpoints"
import settings from "./settings/settings.json"
import { testApi } from "./shared/testApi"

const app: Application = express()
const isOnDevelopment: boolean = config.ENV === "development"

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
if (isOnDevelopment) {
  app.use(morgan("dev"))
}

// Test api
app.get("/", testApi)

// Application api's

// Invalid route
app.use(invalidEndPoints)

// Global error handler
app.use(globalErrorhandler)
export default app
