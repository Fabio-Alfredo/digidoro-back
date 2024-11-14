import { authErrorCodes } from "../utils/errors/auth.errorCodes";
import * as userReposiry from '../repositories/user.repository';
import { ServiceError } from "../errors/servise.error";

export const register = async(user)=>{
    try{
        const existUser = await userReposiry.findUserByEmail(user.email);
        if(existUser) throw new Error(authErrorCodes.USER_ALREADY_EXISTS);

        const newUser = await userReposiry.createUser(user);
        return newUser;
    }catch(e){
        throw new ServiceError('Register error', e.code || authErrorCodes.FAILD_TO_CREATE_USER);
    }
}

export const login = async(email, password)=>{
    try{
        const existUser = await userReposiry.findUserByEmail(email);
        if(!existUser || !(await existUser.comparePassword(password)))
            throw new Error(authErrorCodes.INVALID_CREDENTIALS);
    }catch(e){
        throw new ServiceError('Login error', e.code || authErrorCodes.INVALID_CREDENTIALS);
    }
}