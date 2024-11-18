import { getUserByIdController, getAllUsersController } from "../controllers/user.controller.js";
import { Router } from "express";

const userRoute = Router();

userRoute.get("/", getAllUsersController);
userRoute.get("/:userId", getUserByIdController);

export default userRoute;