import { Todo as PrismaTodo } from "nexus-prisma";
import { objectType } from "nexus";

export const Todo = objectType({
  name: PrismaTodo.$name,
  definition(t) {
    t.field(PrismaTodo.id);
    t.field(PrismaTodo.title);
    t.field(PrismaTodo.finishedAt);
    t.field(PrismaTodo.deletedAt);
    t.field(PrismaTodo.createdAt);
    t.field(PrismaTodo.updatedAt);
  },
});
