const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const ProtossQueries = {
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

  ProtossStructures: async () => {
    const getProtossStructures = await prisma.structure.findMany({
      where: {
        raceId: 2,
      },
      include: {
        production: true,
        protection: true,
        function: true,
      },
    });

    return Promise.resolve(getProtossStructures);
  },

  ProtossHeroes: async () => {
    const getProtossHeroes = await prisma.hero.findMany({
      where: {
        raceId: 2,
      },
    });

    return Promise.resolve(getProtossHeroes);
  },

  ProtossUnits: async () => {
    const getProtossUnits = await prisma.unit.findMany({
      where: {
        raceId: 2,
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

    return Promise.resolve(getProtossUnits);
  },
};

module.exports = { ProtossQueries };
