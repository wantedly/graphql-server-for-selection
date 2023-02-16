import { list, queryField } from "nexus";

export const books = queryField("books", {
  type: list("Book"),
  resolve: async (_root, _args, { prisma }) => {
    const books = prisma.book.findMany();
    return books;
  },
});
