import { ServiceError } from "../utils/error";
import { userErrorCodes } from "../utils/errors/user.errorCodes";
import * as userReposiry from "../repositories/user.repository";

export const getUserById = async (userId) => {
  try {
    const user = await userReposiry.findUserById(userId);
    if (!user) throw new Error(userErrorCodes.USER_NOT_EXIST);
    return user;
  } catch (e) {
    throw new ServiceError(
      "Get user error",
      e.code || userErrorCodes.USER_FECH_FAIL
    );
  }
};

export const getAllUsers = async () => {
    try{
        const users = await userReposiry.findAllUsers();
        return users;
    }catch(e){
        throw new ServiceError(
            "Get all users error",
            e.code || userErrorCodes.FAILD_TO_GET_ALL_USERS
        );
    }
};
