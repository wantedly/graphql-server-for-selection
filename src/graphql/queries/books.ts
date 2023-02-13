import { list, queryField } from "nexus";

export const books = queryField("books", {
  type: list("Book"),
  resolve: () => ([
    {
      title: 'The Awakening',
      author: 'Kate Chopin',
    },
    {
      title: 'City of Glass',
      author: 'Paul Auster',
    },
  ]),
});
