import { GraphQLServer } from "graphql-yoga";
import dotenv from "dotenv";
import resolvers from "../graphql/resolvers";
import morgan from "morgan";

dotenv.config();

const PORT = process.env.PORT || 4000;

const server = new GraphQLServer({
  typeDefs: "graphql/schema.graphql",
  resolvers,
});

server.express.use(morgan("dev"));

server.start({ port: PORT }, () =>
  console.log(`server is running: http://localhost:${PORT}`)
);
