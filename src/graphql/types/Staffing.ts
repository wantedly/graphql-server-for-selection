import { objectType } from "nexus";
import { User } from "./User";

export const Staffing = objectType({
  name: "Staffing",
  description: "募集(Project)とメンバーを紐付ける型。",
  definition(t) {
    t.nonNull.int("id");
    t.nonNull.int("userId");
    t.nonNull.field("user", {
      type: User,
    });
  },
});
