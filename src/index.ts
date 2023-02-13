import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";

dotenv.config();

const HOST = process.env.HOST || "localhost";
const PORT = Number(process.env.PORT) || 4000;

const typeDefs = `#graphql
  type Book {
    title: String
    author: String
  }
  type Query {
    books: [Book]
  }
`;

const books = [
  {
    title: 'The Awakening',
    author: 'Kate Chopin',
  },
  {
    title: 'City of Glass',
    author: 'Paul Auster',
  },
];

const apolloServer = new ApolloServer<{}>({
  typeDefs,
  resolvers: {
    Query: {
      books: () => books,
    },
  },
});

const app = express();
app.use(morgan("combined"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/ping", function (_, res) {
  res.send("pong");
});
const corsOptions: cors.CorsOptions = {
  origin: "http://localhost:*",
};

apolloServer.start().then(() => {
  app.use(
    "/graphql",
    cors(corsOptions),
    expressMiddleware(apolloServer)
  );
  app.listen(PORT, HOST, () => {
    console.log(`Server is running 🚀 ${HOST}:${PORT}`);
  });
});
