import { intArg, nonNull, queryField } from "nexus";
import { EmulatedError, shouldEmulateError } from "../EmulatedError";

export const project = queryField("project", {
  type: "Project",
  description: "特定の募集1件を返す query.",
  args: {
    id: nonNull(intArg({ description: "募集ID" })),
  },
  resolve: async (_root, args, { prisma }) => {
    if (shouldEmulateError()) throw new EmulatedError();
    const { id } = args;
    const project = prisma.project.findUnique({
      where: { id },
      include: { staffings: { include: { user: true } } },
    });
    return project;
  },
});
