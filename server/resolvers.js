const { TerranQueries } = require("./queries/TerranQueries");
const { ProtossQueries } = require("./queries/ProtossQueries");
const { ZergQueries } = require("./queries/ZergQueries");

const { GeneralMutations } = require("./mutations/GeneralMutations");

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const resolvers = {
  Query: {
    // Terran Queries
    Terran: TerranQueries.Terran,
    TerranStructures: TerranQueries.TerranStructures,
    TerranHeroes: TerranQueries.TerranHeroes,
    TerranUnits: TerranQueries.TerranUnits,

    // Protoss Queries
    Protoss: ProtossQueries.Protoss,
    ProtossStructures: ProtossQueries.ProtossStructures,
    ProtossHeroes: ProtossQueries.ProtossHeroes,
    ProtossUnits: ProtossQueries.ProtossUnits,

    // Zerg Queries
    Zerg: ZergQueries.Zerg,
    ZergStructures: ZergQueries.ZergStructures,
    ZergHeroes: ZergQueries.ZergHeroes,
    ZergUnits: ZergQueries.ZergUnits,
  },

  Mutation: {
    // General Mutations
    AddStructure: GeneralMutations.AddStructure,
    UpdateStructure: GeneralMutations.UpdateStructure,
    DeleteStructure: GeneralMutations.DeleteStructure,

    AddHero: GeneralMutations.AddHero,
    UpdateHero: GeneralMutations.UpdateHero,
    DeleteHero: GeneralMutations.DeleteHero,

    AddUnit: GeneralMutations.AddUnit,
    UpdateUnit: GeneralMutations.UpdateUnit,
    DeleteUnit: GeneralMutations.DeleteUnit,
  },
};

module.exports = resolvers;
