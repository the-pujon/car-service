import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { TUser } from "./user.interface";
import { UserModel } from "./user.model";

const createUserIntoDB = async (payload: TUser) => {
  const existingUser = UserModel.findOne({ email: payload.email });

  if (!existingUser) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      "User already exist. Please use deferent email",
    );
  }

  const result = UserModel.create(payload);

  return result;
};

export const UserService = {
  createUserIntoDB,
};
