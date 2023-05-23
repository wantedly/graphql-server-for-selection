import { list, queryField } from "nexus";
import { Todo } from "../types";

export const todos = queryField("todos", {
  type: list(Todo),
  resolve: async (_root, _args, { prisma }) => {
    return await prisma.todo.findMany();
  },
});
