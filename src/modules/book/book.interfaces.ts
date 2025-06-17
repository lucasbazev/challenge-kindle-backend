import type { BookStatus } from "./book.entity.ts";

export interface CreateBookDto {
  title: string;
  description?: string;
  status?: BookStatus;
}
