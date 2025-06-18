import type { Request, Response } from "express";
import { BookService } from "./book.service.ts";
import type { CreateBookDto } from "./book.interfaces.ts";
import type { BookStatus } from "./book.entity.ts";

export const BookController = {
  getAll: async (req: Request, res: Response) => {
    try {
      const data = await BookService.getAll();

      res.status(200).json(data);
    } catch (error: any) {
      res
        .status(error?.status || 400)
        .json({ success: false, error: error?.message });
    }
  },

  getById: async (req: Request<{ id: string }>, res: Response) => {
    try {
      const { id } = req.params;

      const data = await BookService.getById(id);

      res.status(200).json(data);
    } catch (error: any) {
      if (error.message === "NOT_FOUND") {
        res.status(404).json({ success: false, error: "Book not found." });
        return;
      }

      res
        .status(error?.status || 400)
        .json({ success: false, error: error?.message });
    }
  },

  create: async (req: Request<CreateBookDto>, res: Response) => {
    try {
      const { body } = req;

      const data = await BookService.create(body);

      res.status(201).json(data);
    } catch (error: any) {
      if (error.code === "11000") {
        res.status(409).json({
          success: false,
          error: "Book with this title already exists.",
        });
        return;
      }

      res
        .status(error?.status || 400)
        .json({ success: false, error: error?.message });
    }
  },

  updateStatus: async (
    req: Request<{ id: string }, {}, { status: string }>,
    res: Response,
  ) => {
    try {
      const { id } = req.params;
      const { status } = req.body;

      const data = await BookService.updateStatus(id, status as BookStatus);

      res.status(200).json(data);
    } catch (error: any) {
      if (error.message === "INVALID_STATUS") {
        res.status(400).json({
          success: false,
          error: "Invalid book status.",
        });
        return;
      }

      res
        .status(error?.status || 400)
        .json({ success: false, error: error?.message });
    }
  },

  delete: async (req: Request<{ id: string }>, res: Response) => {
    try {
      const { id } = req.params;

      await BookService.delete(id);

      res.status(204).send();
    } catch (error: any) {
      if (error.message === "NOT_FOUND") {
        res.status(404).json({ success: false, error: "Book not found." });
        return;
      }

      res
        .status(error?.status || 400)
        .json({ success: false, error: error?.message });
    }
  },
};
