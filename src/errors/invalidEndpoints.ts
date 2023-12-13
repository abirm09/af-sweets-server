import { NextFunction, Request, Response } from "express"
import ApiError from "./ApiError"

export const invalidEndPoints = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  next(new ApiError(404, "Route not found"))
}
