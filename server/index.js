import { ApolloServer } from "apollo-server";

import { typeDefs } from "./schema.js";
import { resolvers } from "./resolvers.js";

const server = new ApolloServer({ typeDefs, resolvers });

const address = process.env.IP || "localhost";
const port = process.env.PORT || 4000;

server.listen({ port: port }, () =>
  console.log(`🚀 Server ready at http://${address}:${port}`)
);
