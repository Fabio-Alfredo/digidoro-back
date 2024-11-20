import { ServiceError } from "../errors/servise.error.js";
import { errorCodes } from "../utils/errors/error.code.js";
import * as userReposiry from "../repositories/user.repository.js";

export const getUserById = async (userId) => {
  try {
    const user = await userReposiry.findUserById(userId);
    if (!user) throw new Error(errorCodes.USER.USER_NOT_EXIST);
    return user;
  } catch (e) {
    throw new ServiceError(
      "Get user error",
      e.code || errorCodes.USER.USER_FECH_FAIL
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
            e.code || errorCodes.USER.FAILD_TO_GET_ALL_USERS
        );
    }
};


export const updateUser =async(userId, data)=>{
    try{
        const user = await userReposiry.updateUser(userId, data);
        if(!user) throw new Error(errorCodes.USER.USER_NOT_FOUND);
        return user;
    }catch(e){
        throw new ServiceError(
            "Update user error",
            e.code || errorCodes.USER.FAILD_TO_UPDATE_USER
        );
    }
}

export const deleteUser = async (userId)=>{
    try{
        const user = await userReposiry.deleteUser(userId);
        if(!user) throw new Error(errorCodes.USER.USER_NOT_FOUND);
        return user;
    }catch(e){
        throw new ServiceError(
            "Delete user error",
            e.code || errorCodes.USER.FAILD_TO_DELETE_USER
        );
    }
}

export const addTodoUser = async (userId, todoId)=>{
    try{
        const user = await userReposiry.addTodo(userId, todoId);
        return user;
    }catch(e){
        throw new ServiceError(
            "Add todo to user error",
            e.code || errorCodes.USER.FAILD_TO_ADD_TODO
        );
    }
}

export const addPomodoroUser = async (userId, pomodoroId)=>{
    try{
        const user = await userReposiry.addPomodoro(userId, pomodoroId);
        return user;
    }catch(e){
        throw new ServiceError(
            "Add pomodoro to user error",
            e.code || errorCodes.USER.FAILD_TO_ADD_POMODORO
        );
    }
}