import { model, Schema } from "mongoose";
export type BookStatus = "BOUGHT" | "READING" | "FINISHED";

export const Book = model(
  "Book",
  new Schema({
    title: {
      required: true,
      type: String,
      unique: true,
    },

    description: String,

    status: {
      type: String,
      enum: ["BOUGHT", "READING", "FINISHED"],
      default: "BOUGHT",
    },
  }),
);
