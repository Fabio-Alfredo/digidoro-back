import { authErrorCodes } from "../utils/errors/auth.errorCodes.js";
import * as userReposiry from "../repositories/user.repository.js";
import { ServiceError } from "../errors/servise.error.js";
import { createToken } from "../utils/jwt.util.js";

export const register = async (user) => {
  try {
    const existUser = await userReposiry.findUserByEmail(user.email);
    if (existUser) throw new Error(authErrorCodes.USER_ALREADY_EXISTS);

    const newUser = await userReposiry.createUser(user);
    return newUser;
  } catch (e) {
    throw new ServiceError(
      "Register error",
      e.code || authErrorCodes.FAILD_TO_CREATE_USER
    );
  }
};

export const login = async (email, password) => {
  try {
    const existUser = await userReposiry.findUserByEmail(email);

    if (!existUser || !(await existUser.comparePassword(password)))
      throw new Error(authErrorCodes.INVALID_CREDENTIALS);

    const token = createToken({ id: existUser._id });
    if (!token) throw new Error(authErrorCodes.FAILD_CREATE_TOKEN);

    await userReposiry.updateUser(existUser._id, { token });

    return token;
  } catch (e) {
    throw new ServiceError(
      "Login error",
      e.code || authErrorCodes.INVALID_CREDENTIALS
    );
  }
};


export const logout = async (userId)=>{
  try{
    await userReposiry.updateUser(userId, {token: null});
    return "Logout success";
  }catch(e){
    throw new ServiceError(
      "Logout error",
      e.code || authErrorCodes.FAILD_TO_LOGOUT
    );
  }
}
