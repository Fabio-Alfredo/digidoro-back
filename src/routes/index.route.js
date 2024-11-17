import authRoute from "./auth.route.js";
import userRoute from "./user.route.js";
import { Router } from "express";

const routes = Router();

routes.use("/auth", authRoute);
routes.use("/user", userRoute);

export default routes;