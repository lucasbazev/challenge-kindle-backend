import { Book } from "./book.entity.ts";
import type { CreateBookDto } from "./book.interfaces.ts";

export const BookService = {
  getAll: async function () {},

  getById: async function (id: string) {},

  create: async function (payload: CreateBookDto) {
    const book = await Book.create(payload);

    return book;
  },
};
