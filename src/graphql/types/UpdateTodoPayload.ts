import { objectType } from "nexus";
import { Todo } from "./Todo";

export const UpdateTodoPayload = objectType({
  name: "UpdateTodoPayload",
  definition(t) {
    t.field("todo", {
      type: Todo,
    });
  },
});
