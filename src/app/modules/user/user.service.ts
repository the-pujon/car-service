import { TUser } from "./user.interface";
import { UserModel } from "./user.model";

const createUserIntoDB = async (payload: TUser) => {
  const result = UserModel.create(payload);

  return result;
};

export const UserService = {
  createUserIntoDB,
};
