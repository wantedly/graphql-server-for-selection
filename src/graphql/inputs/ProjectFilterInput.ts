import { inputObjectType } from "nexus";

export const ProjectFilterInput = inputObjectType({
  name: "ProjectFilterInput",
  definition(t) {
    t.string("keyword");
    t.string("lookingFor");
  },
});
