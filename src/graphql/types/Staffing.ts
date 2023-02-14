import { objectType } from "nexus";
import { Staffing as PrismaStaffing } from "nexus-prisma";

export const Staffing = objectType({
  name: PrismaStaffing.$name,
  description: PrismaStaffing.$description,
  definition(t) {
    t.field(PrismaStaffing.id);
    t.field(PrismaStaffing.userId);
    t.field(PrismaStaffing.user);
  },
});
