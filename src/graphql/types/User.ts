import { objectType } from "nexus";

export const User = objectType({
  name: "User",
  description: "ユーザー",
  definition(t) {
    t.nonNull.int("id", { description: "ユーザーID" });
    t.nonNull.string("name", { description: "名前" });
    t.string("avatar", { description: "アバターのURL" });
  },
});
