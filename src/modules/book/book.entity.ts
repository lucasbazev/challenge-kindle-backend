import { model, Schema } from "mongoose";
export type BookStatus = "WISHLIST" | "READING" | "FINISHED";

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
      enum: ["WISHLIST", "READING", "FINISHED"],
      default: "WISHLIST",
    },
  }),
);
