import PrismaPkg from "@prisma/client";
const { PrismaClient } = PrismaPkg;

const prisma = new PrismaClient();

const ZergQueries = {
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

  ZergStructures: async () => {
    const getZergStructures = await prisma.structure.findMany({
      where: {
        raceId: 3,
      },
      include: {
        production: true,
        protection: true,
        function: true,
      },
    });

    return Promise.resolve(getZergStructures);
  },

  ZergHeroes: async () => {
    const getZergHeroes = await prisma.hero.findMany({
      where: {
        raceId: 3,
      },
    });

    return Promise.resolve(getZergHeroes);
  },

  ZergUnits: async () => {
    const getZergUnits = await prisma.unit.findMany({
      where: {
        raceId: 3,
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

    return Promise.resolve(getZergUnits);
  },
};

export { ZergQueries };
