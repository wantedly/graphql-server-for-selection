import { Todo as PrismaTodo } from "nexus-prisma";
import { inputObjectType } from "nexus";

export const UpdateTodoInput = inputObjectType({
  name: "UpdateTodoInput",
  definition(t) {
    t.field(PrismaTodo.id);
    t.nullable.field({
      name: PrismaTodo.title.name,
      type: "String",
      description: PrismaTodo.title.description,
    });
    t.field(PrismaTodo.finishedAt);
    t.field(PrismaTodo.deletedAt);
  },
});
