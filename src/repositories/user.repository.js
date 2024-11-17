import User from "../models/user.model";

export const createUser = async (user)=>{
    const newUser = new User(user);
    return await newUser.save();
}

export const findUserById = async(id)=>{
    return await User.findById(id);
}


export const findAllUsers = async()=>{
    return await User.find({});
}

export const findUserByEmail = async(email)=>{
    return await User.findOne({email});
}

export const updateUser = async(id, user)=>{
    return await User.findByIdAndUpdate(id, user, {new: true});
}

export const deleteUser = async(id)=>{
    return await User.findByIdAndDelete(id);
}

export const addTodo = async(id, todoId)=>{
    return await User.findByIdAndUpdate(id, {$push: {id_todos: todoId}}, {new: true});
}

export const addToken = async(id, token)=>{
    return await User.findByIdAndUpdate(id, {token}, {new: true});
}

export const addPomodoro = async(id, pomodoroId)=>{
    return await User.findByIdAndUpdate(id, {id_pomodoro: pomodoroId}, {new: true});
}