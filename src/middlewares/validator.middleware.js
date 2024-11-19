import { validationResult } from "express-validator";

export const runValidation = (req, res, next) => {
  const errors = validationResult(req);
  console.log(errors.array().map((error) => error.msg));

  if (!errors.isEmpty()) {
    console.log("error");
    return res.status(400).json({
      errors: errors.array().map((error) => error.msg),
    });
  }

  next();
};
