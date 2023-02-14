import { Book as PrismaBook } from "nexus-prisma";
import { objectType } from "nexus";

export const Book = objectType({
  name: PrismaBook.$name,
  definition(t) {
    t.field(PrismaBook.id);
    t.field(PrismaBook.title);
    t.field(PrismaBook.author);
  },
});
