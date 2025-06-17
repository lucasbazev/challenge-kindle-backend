import type { Request, Response } from "express";
import { BookService } from "./book.service.ts";
import type { CreateBookDto } from "./book.interfaces.ts";

export const BookController = {
  create: async (req: Request<CreateBookDto>, res: Response) => {
    try {
      const { body } = req;

      const data = await BookService.create(body);

      res.status(201).json(data);
    } catch (error: any) {
      res.status(400).json({ success: false, error: error?.message });
    }
  },
};
