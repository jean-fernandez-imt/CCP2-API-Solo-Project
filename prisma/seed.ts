import { terran } from "../server/data/terran.json";
import { protoss } from "../server/data/protoss.json";
import { zerg } from "../server/data/zerg.json";

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const seed = async () => {
  await prisma.race.create({
    data: {
      name: terran.name,
      structures: {
        create: [
          {
            name: terran.structures[0].name,
            role: terran.structures[0].role,
            production: {
              create: terran.structures[0].production,
            },
            protection: {
              create: terran.structures[0].protection,
            },
            function: {
              create: terran.structures[0].function,
            },
          },
          {
            name: terran.structures[1].name,
            role: terran.structures[1].role,
            production: {
              create: terran.structures[1].production,
            },
            protection: {
              create: terran.structures[1].protection,
            },
            function: {
              create: terran.structures[1].function,
            },
          },
        ],
      },
      heroes: {
        create: terran.heroes,
      },
      units: {
        create: [
          {
            name: terran.units[0].name,
            role: terran.units[0].role,
            armament: {
              create: terran.units[0].armament,
            },
            properties: {
              create: terran.units[0].properties,
            },
            production: {
              create: terran.units[0].production,
            },
            movement: {
              create: terran.units[0].movement,
            },
            protection: {
              create: terran.units[0].protection,
            },
            meta: {
              create: terran.units[0].meta,
            },
          },
          {
            name: terran.units[1].name,
            role: terran.units[1].role,
            armament: {
              create: terran.units[1].armament,
            },
            properties: {
              create: terran.units[1].properties,
            },
            production: {
              create: terran.units[1].production,
            },
            movement: {
              create: terran.units[1].movement,
            },
            protection: {
              create: terran.units[1].protection,
            },
            meta: {
              create: terran.units[1].meta,
            },
          },
        ],
      },
    },
  });

  await prisma.race.create({
    data: {
      name: protoss.name,
      structures: {
        create: [
          {
            name: protoss.structures[0].name,
            role: protoss.structures[0].role,
            production: {
              create: protoss.structures[0].production,
            },
            protection: {
              create: protoss.structures[0].protection,
            },
            function: {
              create: protoss.structures[0].function,
            },
          },
          {
            name: protoss.structures[1].name,
            role: protoss.structures[1].role,
            production: {
              create: protoss.structures[1].production,
            },
            protection: {
              create: protoss.structures[1].protection,
            },
            function: {
              create: protoss.structures[1].function,
            },
          },
        ],
      },
      heroes: {
        create: protoss.heroes,
      },
      units: {
        create: [
          {
            name: protoss.units[0].name,
            role: protoss.units[0].role,
            armament: {
              create: protoss.units[0].armament,
            },
            properties: {
              create: protoss.units[0].properties,
            },
            production: {
              create: protoss.units[0].production,
            },
            movement: {
              create: protoss.units[0].movement,
            },
            protection: {
              create: protoss.units[0].protection,
            },
            meta: {
              create: protoss.units[0].meta,
            },
          },
          {
            name: protoss.units[1].name,
            role: protoss.units[1].role,
            armament: {
              create: protoss.units[1].armament,
            },
            properties: {
              create: protoss.units[1].properties,
            },
            production: {
              create: protoss.units[1].production,
            },
            movement: {
              create: protoss.units[1].movement,
            },
            protection: {
              create: protoss.units[1].protection,
            },
            meta: {
              create: protoss.units[1].meta,
            },
          },
        ],
      },
    },
  });

  await prisma.race.create({
    data: {
      name: zerg.name,
      structures: {
        create: [
          {
            name: zerg.structures[0].name,
            role: zerg.structures[0].role,
            production: {
              create: zerg.structures[0].production,
            },
            protection: {
              create: zerg.structures[0].protection,
            },
            function: {
              create: zerg.structures[0].function,
            },
          },
          {
            name: zerg.structures[1].name,
            production: {
              create: zerg.structures[1].production,
            },
            protection: {
              create: zerg.structures[1].protection,
            },
            function: {
              create: zerg.structures[1].function,
            },
          },
        ],
      },
      heroes: {
        create: zerg.heroes,
      },
      units: {
        create: [
          {
            name: zerg.units[0].name,
            role: zerg.units[0].role,
            armament: {
              create: zerg.units[0].armament,
            },
            properties: {
              create: zerg.units[0].properties,
            },
            production: {
              create: zerg.units[0].production,
            },
            movement: {
              create: zerg.units[0].movement,
            },
            protection: {
              create: zerg.units[0].protection,
            },
            function: {
              create: zerg.units[0].function,
            },
            meta: {
              create: zerg.units[0].meta,
            },
          },
          {
            name: zerg.units[1].name,
            role: zerg.units[1].role,
            armament: {
              create: zerg.units[1].armament,
            },
            properties: {
              create: zerg.units[1].properties,
            },
            production: {
              create: zerg.units[1].production,
            },
            movement: {
              create: zerg.units[1].movement,
            },
            protection: {
              create: zerg.units[1].protection,
            },
            function: {
              create: zerg.units[0].function,
            },
            meta: {
              create: zerg.units[1].meta,
            },
          },
        ],
      },
    },
  });

  const allRaces = await prisma.race.findMany();
  const allStructures = await prisma.structure.findMany();
  const allUnits = await prisma.unit.findMany();

  console.log({ allRaces, allStructures, allUnits });
};

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
