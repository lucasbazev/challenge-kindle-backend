import e from "express";
import "./providers/mongodb.ts";
import { env } from "./utils/env.ts";
import { loggerMiddleware } from "./middlewares/logger/index.ts";
import { appRouter } from "./app.router.ts";

const app = e();
const { PORT, LOGGER } = env;

app.use(e.json());
app.use(appRouter);

if (LOGGER) {
  console.log("📂 Logger middleware enabled");
  app.use(loggerMiddleware);
}

app.listen(PORT, (error) => {
  if (error) {
    console.error("❌ Error starting server:", error);
    process.exit(1);
  }

  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
