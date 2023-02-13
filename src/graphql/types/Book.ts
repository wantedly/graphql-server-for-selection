import { objectType } from "nexus";

export const Book = objectType({
  name: "Book",
  definition(t) {
    t.nonNull.int("id");
    t.nonNull.string("title");
    t.nonNull.string("author");
  },
});
