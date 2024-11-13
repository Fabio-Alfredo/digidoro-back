import User from "../models/user.model";

export const createUser = async (user)=>{
    return await User.create(user);
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