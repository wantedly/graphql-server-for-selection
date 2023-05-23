import { objectType } from "nexus";
import { Todo } from "./Todo";

export const CreateTodoPayload = objectType({
  name: "CreateTodoPayload",
  definition(t) {
    t.field("todo", {
      type: Todo,
    });
  },
});
