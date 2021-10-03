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
  },

  Mutation: {
    AddTerranUnit: async (parent, args) => {
      const { name, role } = args;
      const newUnit = { name, role };

      const createUnit = await prisma.unit.create({
        data: {
          name: newUnit.name,
          role: newUnit.role,
          race: {
            connect: {
              name: "Terran",
            },
          },
        },
      });

      return Promise.resolve(createUnit);
    },

    UpdateTerranUnit: async (parent, args) => {
      const { name, role } = args;
      const updatedUnit = { name, role };

      const updateUnit = await prisma.unit.update({
        where: {
          name: updatedUnit.name,
        },
        data: {
          role: updatedUnit.role,
        },
      });

      return Promise.resolve(updateUnit);
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
