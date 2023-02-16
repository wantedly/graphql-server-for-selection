import { arg, list, queryField } from "nexus";
import { ProjectFilterInput } from "../inputs/ProjectFilterInput";

export const projects = queryField("projects", {
  type: list("Project"),
  description: "募集のリストを返す query",
  args: {
    filter: arg({
      type: ProjectFilterInput,
      description:
        "募集の絞り込みを行うための引数。タイトルをキーワードで検索したり、職種で絞り込みを行ったりできます。",
    }),
  },
  resolve: async (_root, args, { prisma }) => {
    const projects = await prisma.project.findMany({
      where: {
        title: {
          contains: args?.filter?.keyword || "",
        },
        lookingFor: {
          contains: args?.filter?.lookingFor || "",
        },
      },
      include: { staffings: { include: { user: true } } },
    });
    return projects;
  },
});
