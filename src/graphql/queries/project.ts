import { intArg, nonNull, queryField } from "nexus";

export const project = queryField("project", {
  type: "Project",
  args: {
    id: nonNull(intArg()),
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
