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
    army: Int!
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
    research: [String]
  }

  type Hero {
    name: String!
  }

  type Unit {
    name: String!
    role: String!
    armament: UnitArmament!
    properties: UnitProperties!
    production: UnitProduction!
    movement: UnitMovement!
    meta: UnitMeta!
  }

  type UnitArmament {
    name: String!
    damage: Int!
    attacks: Int
    targets: [String]!
    cooldown: Float!
    range: Float!
    upgrade: Int!
  }

  type UnitProperties {
    transportCapacity: Int!
    sight: Int!
  }

  type UnitProduction {
    minerals: Int!
    gas: Int
    army: Int!
    buildTime: Int
    producedFrom: Structure
    evolvesFrom: Unit
    requires: Structure
  }

  type UnitMovement {
    speed: Float!
    acceleration: Int!
    lateralAcceleration: Float!
    deceleration: Int!
    collisionRadius: Float!
    creepMultiplier: Float!
  }

  type UnitProtection {
    shields: Int
    shieldRegenSec: Int
    hitPoints: Int!
    hitPointRegenSec: Float!
    armor: Int!
    type: [String]!
    armorType: String
  }

  type UnitMeta {
    targetPriority: Int!
    killScore: Int!
    productionScore: Int!
  }

  type Query {
    hello: String
  }
`;

module.exports = typeDefs;
