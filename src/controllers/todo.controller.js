import createHttpError from "http-errors";
import * as TodoService from "../services/todo.service";
import { errorCodes } from "../utils/errors/error.code";

export const createTodo = async (req, res, next) => {
  try {
    const todo = req.body;
    todo.id_user = req.user._id;
    const newTodo = await TodoService.createTodo(todo);
    res.status(201).send(newTodo);
  } catch (e) {
    next(createHttpError(500, "Create todo error"));
  }
};

export const getTodoById = async (req, res, next) => {
  try {
    const todoId = req.params.id;
    const todo = await TodoService.getTodoById(todoId);
    res.status(200).send(todo);
  } catch (e) {
    switch (e.code) {
      case errorCodes.TODO.TODO_NOT_FOUND:
        next(createHttpError(404, "Todo not found"));
        break;
      case errorCodes.TODO.TODO_FECH_FAIL:
        next(createHttpError(500, "Get todo error"));
        break;
      default:
        next(e);
    }
  }
};

export const getTodosByUser = async (req, res, next) => {
  try {
    const userId = req.user._id;
    const todos = await TodoService.getTodosByUserId(userId);
    res.status(200).send(todos);
  } catch (e) {
    next(createHttpError(500, "Get todos by user error"));
  }
};

export const getAllTodos = async (req, res, next) => {
  try {
    const todos = await TodoService.getAllTodos();
    res.status(200).send(todos);
  } catch (e) {
    next(createHttpError(500, "Get all todos error"));
  }
};

export const updateTodo = async (req, res, next) => {
  try {
    const todoId = req.params.id;
    const data = req.body;
    const todo = await TodoService.updateTodo(todoId, data);
    res.status(200).send(todo);
  } catch (e) {
    switch (e.code) {
      case errorCodes.TODO.TODO_NOT_FOUND:
        next(createHttpError(404, "Todo not found"));
        break;
      case errorCodes.TODO.FAILD_TO_UPDATE_TODO:
        next(createHttpError(500, "Update todo error"));
        break;
      default:
        next(e);
    }
  }
};

export const deleteTodo = async (req, res, next) => {
  try {
    const todoId = req.params.id;
    const todo = await TodoService.deleteTodo(todoId);
    res.status(200).send(todo);
  } catch (e) {
    switch (e.code) {
      case errorCodes.TODO.TODO_NOT_FOUND:
        next(createHttpError(404, "Todo not found"));
        break;
      default:
        next(e);
    }
  }
};

export const patchTodoInPomodoro = async (req, res, next) => {
  try {
    const pomodoroId = req.params.id;
    const todoId = req.body.todoId;
    const pomodoro = await TodoService.patchTodoInPomodoro(pomodoroId, todoId);
    res.status(200).send(pomodoro);
  } catch (e) {
    switch (e.code) {
      case errorCodes.POMODORO.POMODORO_NOT_FOUND:
        next(createHttpError(404, "Pomodoro not found"));
        break;
      case errorCodes.POMODORO.FAILD_TO_PATCH_TODO_IN_POMODORO:
        next(createHttpError(500, "Patch todo in pomodoro error"));
        break;
      default:
        next(e);
    }
  }
};

export const patchStateTodo = async (req, res, next) => {
  try {
    const todoId = req.params.id;
    const state = req.body.state;
    const todo = await TodoService.patchStateTodo(todoId, state);
    res.status(200).send(todo);
  } catch (e) {
    switch (e.code) {
      case errorCodes.TODO.TODO_NOT_FOUND:
        next(createHttpError(404, "Todo not found"));
        break;
      case errorCodes.TODO.FAILD_TO_PATCH_STATE_TODO:
        next(createHttpError(500, "Patch state todo error"));
        break;
      default:
        next(e);
    }
  }
};
