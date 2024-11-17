import {register, login, logout} from '../services/auth.service'
import {errorCodes} from '../utils/errors/error.code'
import createHttpError from 'http-errors'


export const registerController = async (req, res, next)=>{
    try{
        const user = req.body
        const newUser = await register(user)
        res.status(201).send(newUser)
    }catch(e){
        switch(e){
            case errorCodes.AUTH.USER_ALREADY_EXISTS:
                next(createHttpError(400, "User already exists"))
                break
            case errorCodes.AUTH.FAILD_TO_CREATE_USER:
                next(createHttpError(500, "Register error"))
                break
            default:
                next(e)
        }
    }
}

