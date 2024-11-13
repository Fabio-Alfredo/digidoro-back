import "dotenv/config";

const validateEnv = (enviroment, name) => {
  if (!enviroment) throw new Error(`${name} is not found in .env file`);

  return enviroment;
};

export const config = {
  port: validateEnv(process.env.PORT, "PORT"),
  monogodb: validateEnv(process.env.MONGODB_URI, "MONGODB_URI"),
  jwSecret: validateEnv(process.env.JWT_SECRET, "JWT_SECRET"),
  salt: validateEnv(process.env.SALT_ROUNDS, "SALT_ROUNDS"),
};
