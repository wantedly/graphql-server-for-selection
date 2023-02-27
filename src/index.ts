import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";

import { Context, createContext } from "./context";
import { schema } from "./graphql/schema";

dotenv.config();

const HOST = process.env.HOST || "localhost";
const PORT = Number(process.env.PORT) || 4000;

const apolloServer = new ApolloServer<Context>({
  schema,
});

const app = express();
app.use(morgan("combined"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/ping", function (_, res) {
  res.send("pong");
});

apolloServer.start().then(() => {
  app.use(
    "/graphql",
    cors(),
    expressMiddleware(apolloServer, { context: createContext })
  );
  app.listen(PORT, HOST, () => {
    // eslint-disable-next-line no-console
    console.log(`Server is running 🚀 ${HOST}:${PORT}/graphql`);
  });
}).catch((e) => {
  // eslint-disable-next-line no-console
  console.error(e);
});
