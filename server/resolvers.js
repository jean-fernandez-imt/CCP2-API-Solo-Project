const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const resolvers = {
  Query: {
    Terran: async () => {
      const getTerran = await prisma.race.findUnique({
        where: {
          name: "Terran",
        },
        include: {
          structures: {
            include: {
              production: true,
              protection: true,
              function: true,
            },
          },
          heroes: true,
          units: {
            include: {
              armament: true,
              properties: true,
              production: true,
              movement: true,
              protection: true,
              function: true,
              meta: true,
            },
          },
        },
      });

      return Promise.resolve(getTerran);
    },

    TerranStructures: async () => {
      const getTerranStructures = await prisma.structure.findMany({
        where: {
          raceId: 1,
        },
        include: {
          production: true,
          protection: true,
          function: true,
        },
      });

      return Promise.resolve(getTerranStructures);
    },

    TerranHeroes: async () => {
      const getTerranHeroes = await prisma.hero.findMany({
        where: {
          raceId: 1,
        },
      });

      return Promise.resolve(getTerranHeroes);
    },

    TerranUnits: async () => {
      const getTerranUnits = await prisma.unit.findMany({
        where: {
          raceId: 1,
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

      return Promise.resolve(getTerranUnits);
    },

    Protoss: async () => {
      const getProtoss = await prisma.race.findUnique({
        where: {
          name: "Protoss",
        },
        include: {
          structures: {
            include: {
              production: true,
              protection: true,
              function: true,
            },
          },
          heroes: true,
          units: {
            include: {
              armament: true,
              properties: true,
              production: true,
              movement: true,
              protection: true,
              function: true,
              meta: true,
            },
          },
        },
      });

      return Promise.resolve(getProtoss);
    },

    Zerg: async () => {
      const getZerg = await prisma.race.findUnique({
        where: {
          name: "Zerg",
        },
        include: {
          structures: {
            include: {
              production: true,
              protection: true,
              function: true,
            },
          },
          heroes: true,
          units: {
            include: {
              armament: true,
              properties: true,
              production: true,
              movement: true,
              protection: true,
              function: true,
              meta: true,
            },
          },
        },
      });

      return Promise.resolve(getZerg);
    },
  },
};

module.exports = resolvers;
