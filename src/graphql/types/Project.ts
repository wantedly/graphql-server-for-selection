import { objectType } from "nexus";
import { Project as PrismaProject } from "nexus-prisma";

export const Project = objectType({
  name: PrismaProject.$name,
  description: PrismaProject.$description,
  definition(t) {
    t.field(PrismaProject.id);
    t.field(PrismaProject.title);
    t.field(PrismaProject.coverImageUrl);
    t.field(PrismaProject.lookingFor);
    t.field(PrismaProject.hiringType);
    t.field(PrismaProject.whyDescription);
    t.field(PrismaProject.whatDescription);
    t.field(PrismaProject.howDescription);
    t.field(PrismaProject.description);
    t.field(PrismaProject.publishedAt);
    t.field(PrismaProject.updatedAt);
    t.field(PrismaProject.staffings);
  },
});
