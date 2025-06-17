import "dotenv/config";

const { PORT, LOGGER, NODE_ENV, DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } =
  process.env;

export const env = {
  PORT: PORT || 8080,
  LOGGER: LOGGER === "true",
  NODE_ENV,
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  DB_NAME,
};
