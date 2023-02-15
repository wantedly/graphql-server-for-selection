import { arg, list, queryField } from "nexus";
import { EmulatedError, shouldEmulateError } from "../EmulatedError";
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
    // NOTE: Emulate error.
    // We never write codes like this in production code base of course.
    // But since it is sample application and prisma does not likely to occur errors, so we want to emulate error.
    // Actual application can't escape from errors which occurred by various reasons and web frontend application should handle these errors properly.
    if (shouldEmulateError()) {
      throw new EmulatedError();
    }

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
