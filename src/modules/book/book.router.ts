import { Router } from "express";
import { BookController } from "./book.controller.ts";

export const booksRouter = Router();

booksRouter.get("/", BookController.getAll);
booksRouter.get("/:id", BookController.getById);
booksRouter.post("/", BookController.create);
booksRouter.patch("/:id", BookController.updateStatus);
booksRouter.delete("/:id", BookController.delete);
