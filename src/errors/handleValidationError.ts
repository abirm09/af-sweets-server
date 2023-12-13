import mongoose from "mongoose"
import { IMongooseValidationMsg } from "../types/error"

const handleValidationError = (err: mongoose.Error.ValidationError) => {
  const error: IMongooseValidationMsg[] = Object.values(err.errors).map(
    (element: mongoose.Error.ValidatorError | mongoose.Error.CastError) => {
      return {
        path: element?.path,
        message: element?.message.split("'").join(""),
      }
    },
  )
  return error
}

export default handleValidationError
