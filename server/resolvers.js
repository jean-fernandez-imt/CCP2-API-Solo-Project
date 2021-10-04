const { TerranQueries } = require("./queries/TerranQueries");
const { ProtossQueries } = require("./queries/ProtossQueries");
const { ZergQueries } = require("./queries/ZergQueries");

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
    AddTerranUnit: async (parent, args) => {
      const { unit } = args;

      await prisma.unit.create({
        data: {
          name: unit.name,
          role: unit.role,
          armament: {
            create: unit.armament,
          },
          properties: {
            create: unit.properties,
          },
          production: {
            create: unit.production,
          },
          movement: {
            create: unit.movement,
          },
          protection: {
            create: unit.protection,
          },
          function: {
            create: unit.function,
          },
          meta: {
            create: unit.meta,
          },
          race: {
            connect: {
              name: "Terran",
            },
          },
        },
      });

      const getCreatedUnit = await prisma.unit.findUnique({
        where: {
          name: unit.name,
        },
        include: {
          armament: true,
          properties: true,
          production: true,
          movement: true,
          protection: true,
          function: true,
          meta: true,
        },
      });

      return Promise.resolve(getCreatedUnit);
    },

    UpdateTerranUnit: async (parent, args) => {
      const { name, updatedUnit } = args;

      await prisma.unit.update({
        where: {
          name: name,
        },
        data: {
          name: updatedUnit.name,
          role: updatedUnit.role,
          armament: {
            upsert: {
              update: updatedUnit.armament,
              create: updatedUnit.armament,
            },
          },
          properties: {
            upsert: {
              update: updatedUnit.properties,
              create: updatedUnit.properties,
            },
          },
          production: {
            upsert: {
              update: updatedUnit.production,
              create: updatedUnit.production,
            },
          },
          movement: {
            upsert: {
              update: updatedUnit.movement,
              create: updatedUnit.movement,
            },
          },
          protection: {
            upsert: {
              update: updatedUnit.protection,
              create: updatedUnit.protection,
            },
          },
          function: {
            upsert: {
              update: updatedUnit.function,
              create: updatedUnit.function,
            },
          },
          meta: {
            upsert: {
              update: updatedUnit.meta,
              create: updatedUnit.meta,
            },
          },
        },
      });

      const getUpdatedUnit = await prisma.unit.findUnique({
        where: {
          name: name,
        },
        include: {
          armament: true,
          properties: true,
          production: true,
          movement: true,
          protection: true,
          function: true,
          meta: true,
        },
      });

      return Promise.resolve(getUpdatedUnit);
    },

    DeleteTerranUnit: async (parent, args) => {
      const { name } = args;

      const deleteUnit = await prisma.unit.delete({
        where: {
          name: name,
        },
      });

      return Promise.resolve(deleteUnit);
    },
  },
};

module.exports = resolvers;
