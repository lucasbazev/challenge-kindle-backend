import { Book, type BookStatus } from "./book.entity.ts";
import type { CreateBookDto } from "./book.interfaces.ts";

export const BookService = {
  getAll: async function (query: Record<string, string>) {
    const filters = {
      ...query,
      title: { $regex: query.title || "", $options: "i" },
    };

    return await Book.find(filters).sort({ title: 1 });
  },

  getById: async function (id: string) {
    const book = await Book.findById(id);

    if (!book) {
      throw new Error("NOT_FOUND");
    }

    return book;
  },

  create: async function (payload: CreateBookDto) {
    return await Book.create(payload);
  },

  updateStatus: async function (id: string, status: BookStatus) {
    const options = Book.schema.path("status").options.enum;

    if (!options.includes(status)) {
      throw new Error("INVALID_STATUS");
    }

    return await Book.findByIdAndUpdate(id, { status }, { new: true });
  },

  delete: async function (id: string) {
    return await Book.findByIdAndDelete(id);
  },
};
