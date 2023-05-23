import { mutationField, arg } from "nexus";
import { CreateTodoInput } from "../inputs";
import { CreateTodoPayload } from "../types";

export const createTodo = mutationField("createTodo", {
  type: CreateTodoPayload,
  args: {
    todo: arg({
      type: CreateTodoInput,
    }),
  },
  resolve: async (_root, args, { prisma }) => {
    const r = await prisma.todo.create({
      data: {
        title: args.todo.title,
      },
      select: {
        id: true,
        title: true,
        finishedAt: true,
        deletedAt: true,
        createdAt: true,
        updatedAt: true,
      },
    });
    return {
      todo: r,
    };
  },
});
