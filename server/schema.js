const { gql } = require("apollo-server");

const typeDefs = gql`
  type Race {
    name: String
    structures: [Structure]
    heroes: [Hero]
    units: [Unit]
  }

  type Structure {
    name: String
    role: String
    production: StructureProduction
    protection: StructureProtection
    function: StructureFunction
  }

  input StructureInput {
    name: String
    role: String
    production: StructureProductionInput
    protection: StructureProtectionInput
    function: StructureFunctionInput
  }

  type StructureProduction {
    minerals: Int
    gas: Int
    army: Int
    buildTime: Int
    upgradesFrom: [String]
    producedFrom: [String]
    evolvesFrom: [String]
    requires: [String]
  }

  input StructureProductionInput {
    minerals: Int
    gas: Int
    army: Int
    buildTime: Int
    upgradesFrom: [String]
    producedFrom: [String]
    evolvesFrom: [String]
    requires: [String]
  }

  type StructureProtection {
    shields: Int
    hitPoints: Int
    armor: Int
    type: [String]
    armorType: String
  }

  input StructureProtectionInput {
    shields: Int
    hitPoints: Int
    armor: Int
    type: [String]
    armorType: String
  }

  type StructureFunction {
    addOns: [String]
    upgradesTo: [String]
    evolvesTo: [String]
    produces: [String]
    allows: [String]
    abilities: [String]
    research: [String]
  }

  input StructureFunctionInput {
    addOns: [String]
    upgradesTo: [String]
    evolvesTo: [String]
    produces: [String]
    allows: [String]
    abilities: [String]
    research: [String]
  }

  type Hero {
    name: String!
  }

  input HeroInput {
    name: String!
  }

  type Unit {
    name: String
    role: String
    armament: UnitArmament
    properties: UnitProperties
    production: UnitProduction
    movement: UnitMovement
    protection: UnitProtection
    function: UnitFunction
    meta: UnitMeta
  }

  input UnitInput {
    name: String
    role: String
    armament: UnitArmamentInput
    properties: UnitPropertiesInput
    production: UnitProductionInput
    movement: UnitMovementInput
    protection: UnitProtectionInput
    function: UnitFunctionInput
    meta: UnitMetaInput
  }

  type UnitArmament {
    name: String
    damage: Int
    attacks: Int
    targets: [String]
    cooldown: Float
    range: Float
    upgrade: Int
  }

  input UnitArmamentInput {
    name: String
    damage: Int
    attacks: Int
    targets: [String]
    cooldown: Float
    range: Float
    upgrade: Int
  }

  type UnitProperties {
    transportCapacity: Int
    sight: Int
  }

  input UnitPropertiesInput {
    transportCapacity: Int
    sight: Int
  }

  type UnitProduction {
    minerals: Int
    gas: Int
    army: Int
    buildTime: Int
    producedFrom: [String]
    evolvesFrom: [String]
    requires: [String]
  }

  input UnitProductionInput {
    minerals: Int
    gas: Int
    army: Int
    buildTime: Int
    producedFrom: [String]
    evolvesFrom: [String]
    requires: [String]
  }

  type UnitMovement {
    speed: Float
    acceleration: Float
    lateralAcceleration: Float
    deceleration: Float
    collisionRadius: Float
    creepMultiplier: Float
  }

  input UnitMovementInput {
    speed: Float
    acceleration: Float
    lateralAcceleration: Float
    deceleration: Float
    collisionRadius: Float
    creepMultiplier: Float
  }

  type UnitProtection {
    shields: Int
    shieldRegenSec: Int
    hitPoints: Int
    hitPointRegenSec: Float
    armor: Int
    type: [String]
    armorType: String
  }

  input UnitProtectionInput {
    shields: Int
    shieldRegenSec: Int
    hitPoints: Int
    hitPointRegenSec: Float
    armor: Int
    type: [String]
    armorType: String
  }

  type UnitFunction {
    evolvesTo: [String]
  }

  input UnitFunctionInput {
    evolvesTo: [String]
  }

  type UnitMeta {
    targetPriority: Int
    killScore: Int
    productionScore: Int
  }

  input UnitMetaInput {
    targetPriority: Int
    killScore: Int
    productionScore: Int
  }

  type Query {
    # Terran Queries
    Terran: Race
    TerranStructures: [Structure]
    TerranHeroes: [Hero]
    TerranUnits: [Unit]

    # Protoss Queries
    Protoss: Race
    ProtossStructures: [Structure]
    ProtossHeroes: [Hero]
    ProtossUnits: [Unit]

    # Zerg Queries
    Zerg: Race
    ZergStructures: [Structure]
    ZergHeroes: [Hero]
    ZergUnits: [Unit]
  }

  type Mutation {
    # Terran Mutations
    AddTerranStructure(structure: StructureInput): Structure
    UpdateTerranStructure(
      name: String!
      updatedStructure: StructureInput
    ): Structure
    DeleteTerranStructure(name: String!): Structure

    AddTerranHero(hero: HeroInput): Hero
    UpdateTerranHero(name: String!, updatedHero: HeroInput): Hero
    DeleteTerranHero(name: String!): Hero

    AddTerranUnit(unit: UnitInput): Unit
    UpdateTerranUnit(name: String!, updatedUnit: UnitInput): Unit
    DeleteTerranUnit(name: String!): Unit

    # Protoss Mutations
    AddProtossStructure(structure: StructureInput): Structure
    UpdateProtossStructure(
      name: String!
      updatedStructure: StructureInput
    ): Structure
    DeleteProtossStructure(name: String!): Structure

    AddProtossHero(hero: HeroInput): Hero
    UpdateProtossHero(name: String!, updatedHero: HeroInput): Hero
    DeleteProtossHero(name: String!): Hero

    AddProtossUnit(unit: UnitInput): Unit
    UpdateProtossUnit(name: String!, updatedUnit: UnitInput): Unit
    DeleteProtossUnit(name: String!): Unit

    # Zerg Mutations
    AddZergStructure(structure: StructureInput): Structure
    UpdateZergStructure(
      name: String!
      updatedStructure: StructureInput
    ): Structure
    DeleteZergStructure(name: String!): Structure

    AddZergHero(hero: HeroInput): Hero
    UpdateZergHero(name: String!, updatedHero: HeroInput): Hero
    DeleteZergHero(name: String!): Hero

    AddZergUnit(unit: UnitInput): Unit
    UpdateZergUnit(name: String!, updatedUnit: UnitInput): Unit
    DeleteZergUnit(name: String!): Unit
  }
`;

module.exports = typeDefs;
