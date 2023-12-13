import { Response } from "express"

type ISuccessResponse = {
  statusCode?: number
  message?: string
  payload?: object | undefined
}

const successResponse = (res: Response, data: ISuccessResponse) => {
  const {
    statusCode = 200,
    message = "Operation success.",
    payload = undefined,
  } = data
  return res.status(statusCode).json({ success: true, message, payload })
}

export default successResponse
