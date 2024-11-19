import {
  getPomodoroById,
  getAllPomodoros,
  getPomodoroByUser,
  updatePomodoro,
  deletePomodoro,
  patchTodoInPomodoro,
  patchStatePomodoro,
} from "../controllers/pomodoro.controller";
import { Router } from "express";

const pomodoroRoute = Router();

pomodoroRoute.get("/", getAllPomodoros);
pomodoroRoute.get(":id", getPomodoroById);
pomodoroRoute.get("/user", getPomodoroByUser); //TODO: This route needs to implement authMiddleware
pomodoroRoute.put("/:id", updatePomodoro);
pomodoroRoute.delete("/:id", deletePomodoro);
pomodoroRoute.patch("/todo/:id", patchTodoInPomodoro);
pomodoroRoute.patch("/state/:id", patchStatePomodoro);
