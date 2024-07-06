import httpStatus from "http-status";
//import sendResponse from "./sendResponse";
import { Response } from "express";
import AppError from "../errors/AppError";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const noDataFoundResponse = (res: Response, result: any) => {
  if (result.length === 0 || !result) {
    throw new AppError(httpStatus.NOT_FOUND, "No Data Found");
  }
};
