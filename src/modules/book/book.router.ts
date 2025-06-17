import { Router } from "express";
import { BookController } from "./book.controller.ts";

export const booksRouter = Router();

booksRouter.get("/", () => {});
booksRouter.post("/", BookController.create);
