import { Request, Response } from "express"
import config from "../config"
import successResponse from "./successResponse"

export const testApi = (req: Request, res: Response) => {
  return successResponse(res, {
    statusCode: 200,
    message:
      config.ENV === "development"
        ? "Server is at development."
        : "Server is running successfully mode.",
  })
}
