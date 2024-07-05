import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { TUser } from "./auth.interface";
import { UserModel } from "./auth.model";
import { JwtPayload } from "jsonwebtoken";
import { createToken } from "./auth.utils";
import config from "../../config";

const signupUserIntoDB = async (payload: TUser) => {
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

const loginUserService = async (payload: JwtPayload) => {
  const user = await UserModel.isUserExist(payload.email);

  //if user not found
  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, "This user is not found !");
  }

  //if password is not correct
  if (!UserModel.isPasswordMatch(payload.password, (await user).password)) {
    throw new AppError(httpStatus.BAD_REQUEST, "Password is not correct !");
  }

  const jwtPayload = {
    email: user.email,
    role: user.role,
  };

  const token = createToken(
    jwtPayload,
    config.jwt_access_secret as string,
    "5h",
  );

  return { token, user };
};

export const UserService = {
  signupUserIntoDB,
  loginUserService,
};
