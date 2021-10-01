-- DropForeignKey
ALTER TABLE "Hero" DROP CONSTRAINT "Hero_raceId_fkey";

-- DropForeignKey
ALTER TABLE "Structure" DROP CONSTRAINT "Structure_raceId_fkey";

-- DropForeignKey
ALTER TABLE "StructureFunction" DROP CONSTRAINT "StructureFunction_structureId_fkey";

-- DropForeignKey
ALTER TABLE "StructureProduction" DROP CONSTRAINT "StructureProduction_structureId_fkey";

-- DropForeignKey
ALTER TABLE "StructureProtection" DROP CONSTRAINT "StructureProtection_structureId_fkey";

-- DropForeignKey
ALTER TABLE "Unit" DROP CONSTRAINT "Unit_raceId_fkey";

-- DropForeignKey
ALTER TABLE "UnitArmament" DROP CONSTRAINT "UnitArmament_unitId_fkey";

-- DropForeignKey
ALTER TABLE "UnitFunction" DROP CONSTRAINT "UnitFunction_unitId_fkey";

-- DropForeignKey
ALTER TABLE "UnitMeta" DROP CONSTRAINT "UnitMeta_unitId_fkey";

-- DropForeignKey
ALTER TABLE "UnitMovement" DROP CONSTRAINT "UnitMovement_unitId_fkey";

-- DropForeignKey
ALTER TABLE "UnitProduction" DROP CONSTRAINT "UnitProduction_unitId_fkey";

-- DropForeignKey
ALTER TABLE "UnitProperties" DROP CONSTRAINT "UnitProperties_unitId_fkey";

-- DropForeignKey
ALTER TABLE "UnitProtection" DROP CONSTRAINT "UnitProtection_unitId_fkey";

-- AddForeignKey
ALTER TABLE "Structure" ADD CONSTRAINT "Structure_raceId_fkey" FOREIGN KEY ("raceId") REFERENCES "Race"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StructureProduction" ADD CONSTRAINT "StructureProduction_structureId_fkey" FOREIGN KEY ("structureId") REFERENCES "Structure"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StructureProtection" ADD CONSTRAINT "StructureProtection_structureId_fkey" FOREIGN KEY ("structureId") REFERENCES "Structure"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StructureFunction" ADD CONSTRAINT "StructureFunction_structureId_fkey" FOREIGN KEY ("structureId") REFERENCES "Structure"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Hero" ADD CONSTRAINT "Hero_raceId_fkey" FOREIGN KEY ("raceId") REFERENCES "Race"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Unit" ADD CONSTRAINT "Unit_raceId_fkey" FOREIGN KEY ("raceId") REFERENCES "Race"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UnitArmament" ADD CONSTRAINT "UnitArmament_unitId_fkey" FOREIGN KEY ("unitId") REFERENCES "Unit"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UnitProperties" ADD CONSTRAINT "UnitProperties_unitId_fkey" FOREIGN KEY ("unitId") REFERENCES "Unit"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UnitProduction" ADD CONSTRAINT "UnitProduction_unitId_fkey" FOREIGN KEY ("unitId") REFERENCES "Unit"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UnitMovement" ADD CONSTRAINT "UnitMovement_unitId_fkey" FOREIGN KEY ("unitId") REFERENCES "Unit"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UnitProtection" ADD CONSTRAINT "UnitProtection_unitId_fkey" FOREIGN KEY ("unitId") REFERENCES "Unit"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UnitFunction" ADD CONSTRAINT "UnitFunction_unitId_fkey" FOREIGN KEY ("unitId") REFERENCES "Unit"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UnitMeta" ADD CONSTRAINT "UnitMeta_unitId_fkey" FOREIGN KEY ("unitId") REFERENCES "Unit"("id") ON DELETE CASCADE ON UPDATE CASCADE;
