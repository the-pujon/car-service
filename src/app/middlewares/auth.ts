import { NextFunction, Request, Response } from "express";
import catchAsync from "../utils/catchAsync.";
import AppError from "../errors/AppError";
import httpStatus from "http-status";
import jwt from "jsonwebtoken";
import config from "../config";

const auth = (requireRole: string) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;

    //if token can't fount
    if (!token) {
      throw new AppError(httpStatus.UNAUTHORIZED, "You are not authorized");
    }

    const decode = jwt.verify(token, config.jwt_access_secret as string);
  });
};
