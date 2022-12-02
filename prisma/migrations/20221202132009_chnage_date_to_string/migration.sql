-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_TodoItemData" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "text" TEXT NOT NULL,
    "date" TEXT NOT NULL
);
INSERT INTO "new_TodoItemData" ("date", "id", "text") SELECT "date", "id", "text" FROM "TodoItemData";
DROP TABLE "TodoItemData";
ALTER TABLE "new_TodoItemData" RENAME TO "TodoItemData";
CREATE UNIQUE INDEX "TodoItemData_id_key" ON "TodoItemData"("id");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
