import { sign, verify  } from "jsonwebtoken";
import { config } from "../configs/config.js";

export const createToken = (payload) => {
  const token = sign(payload, config.jwSecret, { expiresIn: "1d" });
  return {token};
};

export const verify = (token) => {
  const payload = verify(token, config.jwSecret);
  return payload;
};
