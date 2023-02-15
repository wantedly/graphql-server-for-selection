import { ExpressMiddlewareOptions } from "@apollo/server/express4";
import { PrismaClient } from "@prisma/client";

export type Context = {
  // NOTE: To handle relationship between models properly, we need to name prisma client instance 'prisma'.
  // cf. https://graphql-nexus.github.io/nexus-prisma/docs/features#project-relations
  prisma: PrismaClient;
};

export const createContext: ExpressMiddlewareOptions<Context>["context"] =
  async () => {
    const prisma = new PrismaClient({
      log: [
        {
          level: "query",
          emit: "event",
        },
      ],
    });
    // eslint-disable-next-line no-console
    prisma.$on("query", console.log);
    return {
      prisma,
    };
  };
