import { register, login, logout } from "../services/auth.service";
import { addPomodoro } from "../repositories/user.repository";
import { createPomodoro } from "../repositories/pomodor.repository";
import { errorCodes } from "../utils/errors/error.code";
import createHttpError from "http-errors";

export const registerController = async (req, res, next) => {
  try {
    const user = req.body;
    const newUser = await register(user);

    const pomodor = await createPomodoro({ userId: newUser._id });
    await addPomodoro(newUser._id, pomodor._id);

    res.status(201).send("User created successfully");
  } catch (e) {
    switch (e) {
      case errorCodes.AUTH.USER_ALREADY_EXISTS:
        next(createHttpError(400, "User already exists"));
        break;
      case errorCodes.AUTH.FAILD_TO_CREATE_USER:
        next(createHttpError(500, "Register error"));
        break;
      default:
        next(e);
    }
  }
};

export const loginController = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const token = await login(email, password);
    res.status(200).send(token);
  } catch (e) {
    switch (e) {
      case errorCodes.AUTH.INVALID_CREDENTIALS:
        next(createHttpError(400, "Invalid credentials"));
        break;
      case errorCodes.AUTH.FAILD_CREATE_TOKEN:
        next(createHttpError(500, "Token creation error"));
        break;
      case errorCodes.AUTH.FAILD_TO_LOGIN:
        next(createHttpError(500, "Login error"));
        break;
      default:
        next(e);
    }
  }
};

export const logoutController = async (req, res, next) => {
  try {
    const userId = req.user._id;
    await logout(userId);
    res.status(200).send("Logout success");
  } catch (e) {
    switch (e) {
      case errorCodes.AUTH.FAILD_TO_LOGOUT:
        next(createHttpError(500, "Logout error"));
        break;
      default:
        next(e);
    }
  }
};
