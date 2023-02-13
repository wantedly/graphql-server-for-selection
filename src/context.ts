import { PrismaClient } from "@prisma/client";
import { ExpressMiddlewareOptions } from "@apollo/server/express4";

export type Context = {
  prismaClient: PrismaClient,
};

export const createContext: ExpressMiddlewareOptions<Context>["context"] = async () => {
  const prismaClient = new PrismaClient({
    log: [
      {
          level: 'query',
          emit: 'event',
      },
    ]
  });
  prismaClient.$on("query", console.log);
  return {
    prismaClient,
  };
};
