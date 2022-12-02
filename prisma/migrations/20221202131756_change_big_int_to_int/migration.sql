/*
  Warnings:

  - You are about to alter the column `date` on the `TodoItemData` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_TodoItemData" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "text" TEXT NOT NULL,
    "date" INTEGER NOT NULL
);
INSERT INTO "new_TodoItemData" ("date", "id", "text") SELECT "date", "id", "text" FROM "TodoItemData";
DROP TABLE "TodoItemData";
ALTER TABLE "new_TodoItemData" RENAME TO "TodoItemData";
CREATE UNIQUE INDEX "TodoItemData_id_key" ON "TodoItemData"("id");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
