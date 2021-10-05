import { TerranQueries } from "./queries/TerranQueries.js";
import { ProtossQueries } from "./queries/ProtossQueries.js";
import { ZergQueries } from "./queries/ZergQueries.js";

import { GeneralMutations } from "./mutations/GeneralMutations.js";

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

export { resolvers };
