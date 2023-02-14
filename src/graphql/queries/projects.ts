import { arg, list, queryField } from "nexus";
import { ProjectFilterInput } from "../inputs/ProjectFilterInput";

export const projects = queryField("projects", {
  type: list("Project"),
  args: {
    filter: arg({
      type: ProjectFilterInput,
    }),
  },
  resolve: async (_root, args, { prismaClient }) => {
    const projects = await prismaClient.project.findMany({
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
