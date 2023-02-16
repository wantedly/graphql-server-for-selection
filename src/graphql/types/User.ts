import { objectType } from "nexus";
import { User as PrismaUser } from "nexus-prisma";

export const User = objectType({
  name: PrismaUser.$name,
  description: PrismaUser.$description,
  definition(t) {
    t.field(PrismaUser.id);
    t.field(PrismaUser.name);
    t.field(PrismaUser.avatar);
  },
});
