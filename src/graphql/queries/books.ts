import { list, queryField } from "nexus";

export const books = queryField("books", {
  type: list("Book"),
  resolve: async (_root, _args, { prismaClient }) => {
    const books = prismaClient.book.findMany();
    return books;
  },
});
