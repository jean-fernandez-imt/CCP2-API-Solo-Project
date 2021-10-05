import PrismaPkg from "@prisma/client";
const { PrismaClient } = PrismaPkg;

const prisma = new PrismaClient();

const GeneralMutations = {
  AddStructure: async (parent, args) => {
    const { race, structure } = args;

    await prisma.structure.create({
      data: {
        name: structure.name,
        role: structure.role,
        production: {
          create: structure.production,
        },
        production: {
          create: structure.production,
        },
        protection: {
          create: structure.protection,
        },
        function: {
          create: structure.function,
        },
        race: {
          connect: {
            name: race,
          },
        },
      },
    });

    const getCreatedStructure = await prisma.structure.findUnique({
      where: {
        name: structure.name,
      },
      include: {
        production: true,
        protection: true,
        function: true,
      },
    });

    return Promise.resolve(getCreatedStructure);
  },

  UpdateStructure: async (parent, args) => {
    const { name, updatedStructure } = args;

    await prisma.structure.update({
      where: {
        name: name,
      },
      data: {
        name: updatedStructure.name,
        role: updatedStructure.role,
        production: {
          upsert: {
            update: updatedStructure.production,
            create: updatedStructure.production,
          },
        },
        protection: {
          upsert: {
            update: updatedStructure.protection,
            create: updatedStructure.protection,
          },
        },
        function: {
          upsert: {
            update: updatedStructure.function,
            create: updatedStructure.function,
          },
        },
      },
    });

    const getUpdatedStructure = await prisma.structure.findUnique({
      where: {
        name: name,
      },
      include: {
        production: true,
        protection: true,
        function: true,
      },
    });

    return Promise.resolve(getUpdatedStructure);
  },

  DeleteStructure: async (parent, args) => {
    const { name } = args;

    const deleteStructure = await prisma.structure.delete({
      where: {
        name: name,
      },
    });

    return Promise.resolve(deleteStructure);
  },

  AddHero: async (parent, args) => {
    const { race, hero } = args;

    await prisma.hero.create({
      data: {
        name: hero.name,
        race: {
          connect: {
            name: race,
          },
        },
      },
    });

    const getCreatedHero = await prisma.hero.findUnique({
      where: {
        name: hero.name,
      },
    });

    return Promise.resolve(getCreatedHero);
  },

  UpdateHero: async (parent, args) => {
    const { name, updatedHero } = args;

    await prisma.hero.update({
      where: {
        name: name,
      },
      data: {
        name: updatedHero.name,
      },
    });

    const getUpdatedHero = await prisma.hero.findUnique({
      where: {
        name: name,
      },
    });

    return Promise.resolve(getUpdatedHero);
  },

  DeleteHero: async (parent, args) => {
    const { name } = args;

    const deleteHero = await prisma.hero.delete({
      where: {
        name: name,
      },
    });

    return Promise.resolve(deleteHero);
  },

  AddUnit: async (parent, args) => {
    const { race, unit } = args;

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
            name: race,
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

  UpdateUnit: async (parent, args) => {
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

  DeleteUnit: async (parent, args) => {
    const { name } = args;

    const deleteUnit = await prisma.unit.delete({
      where: {
        name: name,
      },
    });

    return Promise.resolve(deleteUnit);
  },
};

export { GeneralMutations };
