import { getAllUsers, getUserById } from "../services/user.service";
import { errorCodes } from "../utils/errors/error.code";
import createHttpError from "http-errors";

export const getAllUsersController = async (req, res, next) => {
    try{
        const users = await getAllUsers();
        res.status(200).send(users);
    }catch(e){
        switch(e){
            case errorCodes.USER.FAILD_TO_GET_ALL_USERS:
                next(createHttpError(500, "Get all users error"));
                break;
            default:
                next(e);
        }
    }
}

