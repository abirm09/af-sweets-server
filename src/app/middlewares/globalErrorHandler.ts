import { NextFunction, Request, Response } from "express"
import mongoose from "mongoose"
import config from "../../config"
import ApiError from "../../errors/ApiError"
import handleValidationError from "../../errors/handleValidationError"
import { IMongooseValidationMsg } from "../../types/error"
const globalErrorhandler = async (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  let status = 500
  let message =
    "Something went wrong. Please try again later or contact with support."
  let errorMessages: IMongooseValidationMsg[] | undefined = undefined
  const stack = config.ENV === "development" ? err.stack : undefined

  if (err instanceof ApiError) {
    status = err.statusCode
    message = err.message
  } else if (err instanceof mongoose.Error) {
    status = 400
    if (err.name === "ValidationError") {
      const modifyError: IMongooseValidationMsg[] = handleValidationError(
        err as mongoose.Error.ValidationError,
      )
      errorMessages = modifyError
    }
  }

  // send error message
  res.status(status).send({ success: false, message, errorMessages, stack })
  next()
}
export default globalErrorhandler
