import "dotenv/config";

const { PORT, LOGGER, NODE_ENV } = process.env;

export const env = {
  PORT: PORT || 8080,
  LOGGER: LOGGER === "true",
  NODE_ENV,
};
