import { Router } from "express";
import { booksRouter } from "./modules/book/book.router.ts";

export const appRouter = Router();

appRouter.use("/books", booksRouter);
