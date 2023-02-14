import { intArg, nonNull, queryField } from "nexus";

export const project = queryField("project", {
  type: "Project",
  description: "特定の募集1件を返す query.",
  args: {
    id: nonNull(intArg({ description: "募集ID" })),
  },
  resolve: async (_root, args, { prismaClient }) => {
    const { id } = args;
    const project = prismaClient.project.findUnique({
      where: { id },
      include: { staffings: { include: { user: true } } },
    });
    return project;
  },
});
