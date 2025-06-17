import { Types } from "mongoose";
export type BookStatus = "BOUGHT" | "READING" | "FINISHED";

export class Book {
  private _id: Types.ObjectId = new Types.ObjectId();
  private title: string;
  private description?: string;
  private status: BookStatus;

  constructor(title: string, description?: string, status?: BookStatus) {
    if (!title) {
      throw new Error("Title is required");
    }

    this.title = title;
    this.description = description;
    this.status = status || "BOUGHT";
  }
}
