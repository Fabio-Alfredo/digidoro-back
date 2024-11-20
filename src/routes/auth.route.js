import { loginController, logoutController, registerController } from "../controllers/auth.controller.js";
import { Router } from "express";

const authRoute = Router();

authRoute.post("/register", registerController);
authRoute.post("/login", loginValidator, runValidation, loginController);
authRoute.post("/logout", logoutController);

export default authRoute;

