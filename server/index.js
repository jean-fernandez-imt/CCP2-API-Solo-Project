const { ApolloServer } = require("apollo-server");

const typeDefs = require("./schema");
const resolvers = require("./resolvers");

const server = new ApolloServer({ typeDefs, resolvers });

const address = process.env.IP || "localhost";
const port = process.env.PORT || 4000;

server.listen({ port: port }, () =>
  console.log(`🚀 Server ready at http://${address}:${port}`)
);
