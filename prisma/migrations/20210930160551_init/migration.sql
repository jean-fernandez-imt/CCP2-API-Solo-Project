-- CreateTable
CREATE TABLE "Structure" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "role" VARCHAR(255),
    "raceId" INTEGER NOT NULL,

    CONSTRAINT "Structure_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StructureProduction" (
    "id" SERIAL NOT NULL,
    "minerals" INTEGER NOT NULL,
    "gas" INTEGER,
    "army" INTEGER,
    "buildTime" INTEGER NOT NULL,
    "upgradesFrom" TEXT[],
    "producedFrom" TEXT[],
    "evolvesFrom" TEXT[],
    "requires" TEXT[],
    "structureId" INTEGER NOT NULL,

    CONSTRAINT "StructureProduction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StructureProtection" (
    "id" SERIAL NOT NULL,
    "shields" INTEGER,
    "hitPoints" INTEGER NOT NULL,
    "armor" INTEGER NOT NULL,
    "type" TEXT[],
    "armorType" TEXT NOT NULL,
    "structureId" INTEGER NOT NULL,

    CONSTRAINT "StructureProtection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StructureFunction" (
    "id" SERIAL NOT NULL,
    "addOns" TEXT[],
    "upgradesTo" TEXT[],
    "evolvesTo" TEXT[],
    "produces" TEXT[],
    "allows" TEXT[],
    "abilities" TEXT[],
    "research" TEXT[],
    "structureId" INTEGER NOT NULL,

    CONSTRAINT "StructureFunction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Unit" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "role" VARCHAR(255),
    "raceId" INTEGER NOT NULL,

    CONSTRAINT "Unit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UnitArmament" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "damage" INTEGER NOT NULL,
    "attacks" INTEGER,
    "targets" TEXT[],
    "cooldown" DOUBLE PRECISION NOT NULL,
    "range" DOUBLE PRECISION NOT NULL,
    "upgrade" INTEGER NOT NULL,
    "unitId" INTEGER NOT NULL,

    CONSTRAINT "UnitArmament_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UnitProperties" (
    "id" SERIAL NOT NULL,
    "transportCapacity" INTEGER NOT NULL,
    "sight" INTEGER NOT NULL,
    "unitId" INTEGER NOT NULL,

    CONSTRAINT "UnitProperties_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UnitProduction" (
    "id" SERIAL NOT NULL,
    "minerals" INTEGER NOT NULL,
    "gas" INTEGER,
    "army" INTEGER NOT NULL,
    "buildTime" INTEGER NOT NULL,
    "producedFrom" TEXT[],
    "evolvesFrom" TEXT[],
    "requires" TEXT[],
    "unitId" INTEGER NOT NULL,

    CONSTRAINT "UnitProduction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UnitMovement" (
    "id" SERIAL NOT NULL,
    "speed" DOUBLE PRECISION NOT NULL,
    "acceleration" INTEGER NOT NULL,
    "lateralAcceleration" DOUBLE PRECISION NOT NULL,
    "deceleration" INTEGER NOT NULL,
    "collisionRadius" DOUBLE PRECISION NOT NULL,
    "creepMultiplier" DOUBLE PRECISION,
    "unitId" INTEGER NOT NULL,

    CONSTRAINT "UnitMovement_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UnitProtection" (
    "id" SERIAL NOT NULL,
    "shields" INTEGER,
    "shieldRegenSec" INTEGER,
    "hitPoints" INTEGER NOT NULL,
    "hitPointRegenSec" DOUBLE PRECISION,
    "armor" INTEGER NOT NULL,
    "type" TEXT[],
    "armorType" TEXT NOT NULL,
    "unitId" INTEGER NOT NULL,

    CONSTRAINT "UnitProtection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UnitFunction" (
    "id" SERIAL NOT NULL,
    "evolvesTo" TEXT[],
    "unitId" INTEGER NOT NULL,

    CONSTRAINT "UnitFunction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UnitMeta" (
    "id" SERIAL NOT NULL,
    "targetPriority" INTEGER NOT NULL,
    "killScore" INTEGER NOT NULL,
    "productionScore" INTEGER NOT NULL,
    "unitId" INTEGER NOT NULL,

    CONSTRAINT "UnitMeta_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Structure_raceId_key" ON "Structure"("raceId");

-- CreateIndex
CREATE UNIQUE INDEX "StructureProduction_structureId_key" ON "StructureProduction"("structureId");

-- CreateIndex
CREATE UNIQUE INDEX "StructureProtection_structureId_key" ON "StructureProtection"("structureId");

-- CreateIndex
CREATE UNIQUE INDEX "StructureFunction_structureId_key" ON "StructureFunction"("structureId");

-- CreateIndex
CREATE UNIQUE INDEX "Unit_raceId_key" ON "Unit"("raceId");

-- CreateIndex
CREATE UNIQUE INDEX "UnitArmament_unitId_key" ON "UnitArmament"("unitId");

-- CreateIndex
CREATE UNIQUE INDEX "UnitProperties_unitId_key" ON "UnitProperties"("unitId");

-- CreateIndex
CREATE UNIQUE INDEX "UnitProduction_unitId_key" ON "UnitProduction"("unitId");

-- CreateIndex
CREATE UNIQUE INDEX "UnitMovement_unitId_key" ON "UnitMovement"("unitId");

-- CreateIndex
CREATE UNIQUE INDEX "UnitProtection_unitId_key" ON "UnitProtection"("unitId");

-- CreateIndex
CREATE UNIQUE INDEX "UnitFunction_unitId_key" ON "UnitFunction"("unitId");

-- CreateIndex
CREATE UNIQUE INDEX "UnitMeta_unitId_key" ON "UnitMeta"("unitId");

-- AddForeignKey
ALTER TABLE "Structure" ADD CONSTRAINT "Structure_raceId_fkey" FOREIGN KEY ("raceId") REFERENCES "Race"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StructureProduction" ADD CONSTRAINT "StructureProduction_structureId_fkey" FOREIGN KEY ("structureId") REFERENCES "Structure"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StructureProtection" ADD CONSTRAINT "StructureProtection_structureId_fkey" FOREIGN KEY ("structureId") REFERENCES "Structure"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StructureFunction" ADD CONSTRAINT "StructureFunction_structureId_fkey" FOREIGN KEY ("structureId") REFERENCES "Structure"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Unit" ADD CONSTRAINT "Unit_raceId_fkey" FOREIGN KEY ("raceId") REFERENCES "Race"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UnitArmament" ADD CONSTRAINT "UnitArmament_unitId_fkey" FOREIGN KEY ("unitId") REFERENCES "Unit"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UnitProperties" ADD CONSTRAINT "UnitProperties_unitId_fkey" FOREIGN KEY ("unitId") REFERENCES "Unit"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UnitProduction" ADD CONSTRAINT "UnitProduction_unitId_fkey" FOREIGN KEY ("unitId") REFERENCES "Unit"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UnitMovement" ADD CONSTRAINT "UnitMovement_unitId_fkey" FOREIGN KEY ("unitId") REFERENCES "Unit"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UnitProtection" ADD CONSTRAINT "UnitProtection_unitId_fkey" FOREIGN KEY ("unitId") REFERENCES "Unit"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UnitFunction" ADD CONSTRAINT "UnitFunction_unitId_fkey" FOREIGN KEY ("unitId") REFERENCES "Unit"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UnitMeta" ADD CONSTRAINT "UnitMeta_unitId_fkey" FOREIGN KEY ("unitId") REFERENCES "Unit"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
