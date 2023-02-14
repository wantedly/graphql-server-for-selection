import { inputObjectType } from "nexus";

export const ProjectFilterInput = inputObjectType({
  name: "ProjectFilterInput",
  description: "募集の絞り込みを行うための input 型。",
  definition(t) {
    t.string("keyword", { description: "募集タイトルに含まれるべきキーワード。" });
    t.string("lookingFor", { description: "募集職種" });
  },
});
