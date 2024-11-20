import { body } from "express-validator"
import { TODO_STATE } from "../utils/constants/todoState.utils.js"

export const createTodoValidator = [
    body('title').notEmpty().withMessage('Title is required')
    .isString().withMessage('Title must be a string')
    .isLength({min: 1}).withMessage('Title must be at least 1 characters')
    .isLength({max: 50}).withMessage('Title must be at most 50 characters'),

    body('description').optional().notEmpty().withMessage('Description is required')
    .isString().withMessage('Description must be a string')
    .isLength({min: 1}).withMessage('Description must be at least 1 characters'),

    body('reminder').optional().isDate().withMessage('Reminder must be a date')
]

export const updateTodoValidator = [
    body('title').optional().isString().withMessage('Title must be a string')
    .isLength({min: 1}).withMessage('Title must be at least 1 characters')
    .isLength({max: 50}).withMessage('Title must be at most 50 characters'),

    body('description').optional().isString().withMessage('Description must be a string')
    .isLength({min: 1}).withMessage('Description must be at least 1 characters'),

    body('reminder').optional().isDate().withMessage('Reminder must be a date'),
    body('color').optional().isString().withMessage('Color must be a string')
]

export const patchTodoValidator = [
    body('state').notEmpty().withMessage('State is required')
    .isString().withMessage('State must be a string')
    .isIn([TODO_STATE.PENDING, TODO_STATE.COMPLETE, TODO_STATE.PROGRESS]).withMessage('State must be one of pending, complete, progress')
]