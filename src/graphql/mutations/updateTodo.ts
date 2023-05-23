import { mutationField, arg } from "nexus";
import { UpdateTodoInput } from "../inputs";
import { UpdateTodoPayload } from "../types";

export const updateTodo = mutationField("updateTodo", {
  type: UpdateTodoPayload,
  args: {
    todo: arg({
      type: UpdateTodoInput,
    }),
  },
  resolve: async (_root, args, { prisma }) => {
    const r = await prisma.todo.update({
      where: {
        id: args.todo.id,
      },
      data: {
        title: args.todo.title,
        finishedAt: args.todo.finishedAt,
        deletedAt: args.todo.deletedAt,
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
