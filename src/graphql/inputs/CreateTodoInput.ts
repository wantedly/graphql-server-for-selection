import { Todo as PrismaTodo } from "nexus-prisma";
import { inputObjectType } from "nexus";

export const CreateTodoInput = inputObjectType({
  name: "CreateTodoInput",
  definition(t) {
    t.field(PrismaTodo.title);
  },
});
