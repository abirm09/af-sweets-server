import dotenv from 'dotenv'
import path from 'path'
// eslint-disable-next-line no-undef
dotenv.config({ path: path.join(process.cwd(), '.env') })

// eslint-disable-next-line no-undef
const env = process.env

export default {
  ENV: env.NODE_ENV,
  PORT: env.PORT,
  DB_URL:
    env.NODE_ENV === 'production'
      ? env.DB_URL_PRODUCTION
      : env.DB_URL_DEVELOPMENT,
  CLIENT_SIDE_URL: env.CLIENT_SIDE_URL,
  CLIENT_SIDE_HOST: env.CLIENT_SIDE_HOST,
  ACCESS_TOKEN_SECRET: env.ACCESS_TOKEN_SECRET,
  GOOGLE_SMTP_USER: env.GOOGLE_SMTP_USER,
  GOOGLE_SMTP_PASSWORD: env.GOOGLE_SMTP_PASSWORD,
}
