import { objectType } from "nexus";
import { Staffing } from "./Staffing";

export const Project = objectType({
  name: "Project",
  definition(t) {
    t.nonNull.int("id");
    t.nonNull.string("title");
    t.nonNull.string("coverImageUrl");
    t.nonNull.string("whyDescription");
    t.nonNull.string("whatDescription");
    t.nonNull.string("howDescription");
    t.nonNull.string("description");
    t.nonNull.list.field("staffings", {
      type: Staffing,
    });
  },
});
