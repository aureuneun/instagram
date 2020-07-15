import express from "express";
import { ApolloServer } from "apollo-server-express";
import compression from "compression";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";
import resolvers from "./graphql/resolvers";
import typeDefs from "./graphql/typeDefs";

dotenv.config();

const PORT = process.env.PORT || 4000;

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();

app.use(helmet());
app.use(compression());
app.use(morgan("dev"));
app.use(cors());

server.applyMiddleware({ app, path: "/graphql" });

app.listen({ port: PORT }, () =>
  console.log(`Server is running: http://localhost:${PORT}`)
);
