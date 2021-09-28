const express = require("express");
const { graphqlHTTP } = require("express-graphql");

const schema = require("./schema");
const root = require("./resolvers");

const server = express();

const port = process.env.PORT || 4000;

server.use(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true,
  })
);

server.listen(port);
console.log(`Running a GraphQL API server at http://localhost:${port}/graphql`);
