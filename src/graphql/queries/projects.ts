import { list, queryField } from "nexus";

export const projects = queryField("projects", {
  type: list("Project"),
  resolve: async (_root, _args, { prismaClient }) => {
    const projects = await prismaClient.project.findMany({
      include: { staffings: { include: { user: true } } },
    });
    return projects;
  },
});
