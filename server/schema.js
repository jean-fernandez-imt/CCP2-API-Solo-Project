const { gql } = require("apollo-server");

const typeDefs = gql`
  type Race {
    name: String!
    Structures: [Structure]!
    Heroes: [Hero]!
    Units: [Unit]!
  }

  type Structure {
    name: String!
    role: String!
    production: StructureProduction!
    protection: StructureProtection!
    function: StructureFunction
  }

  type StructureProduction {
    minerals: Int!
    supply: Int!
    buildTime: Int!
    upgradesFrom: Structure
    producedFrom: [Unit]
  }

  type StructureProtection {
    shields: Int
    hitPoints: Int!
    armor: Int!
    type: [String]!
    armorType: String!
  }

  type StructureFunction {
    upgradesTo: Structure
    produces: [Unit]
    allows: [Structure]
    abilities: [String]
  }

  type Hero {
    name: String
  }

  type Unit {
    name: String
  }

  type Query {
    hello: String
  }
`;

module.exports = typeDefs;
