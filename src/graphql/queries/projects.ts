import { list, queryField } from "nexus";

export const projects = queryField("projects", {
  type: list("Project"),
  resolve: async (_root, _args, { prismaClient }) => {
    const p = await prismaClient.project.findMany({
      include: { staffings: { include: { user: true } } },
    });
    return p;
  },
});
