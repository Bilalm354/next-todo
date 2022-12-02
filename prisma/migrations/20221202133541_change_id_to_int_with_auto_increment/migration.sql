/*
  Warnings:

  - The primary key for the `TodoItemData` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `TodoItemData` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_TodoItemData" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "text" TEXT NOT NULL,
    "date" TEXT NOT NULL
);
INSERT INTO "new_TodoItemData" ("date", "id", "text") SELECT "date", "id", "text" FROM "TodoItemData";
DROP TABLE "TodoItemData";
ALTER TABLE "new_TodoItemData" RENAME TO "TodoItemData";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
