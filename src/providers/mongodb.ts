import mongoose from "mongoose";
import { env } from "../utils/env.ts";

(async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${env.DB_USER}:${env.DB_PASSWORD}@${env.DB_HOST}/${env.DB_NAME}?retryWrites=true&w=majority&appName=dev`,
    );

    console.log(
      mongoose.connection.readyState === 1 &&
        "✅ Connected to MongoDB successfully",
    );
  } catch (error) {
    console.error("❌ Error connecting to MongoDB:", error);
  }
})();
