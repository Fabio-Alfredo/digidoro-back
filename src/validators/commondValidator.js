import { param } from "express-validator";

export const idParamValidator = [
    param('id').notEmpty().withMessage('Id is required')
    .isMongoId().withMessage('Id must be a valid mongo id')
]