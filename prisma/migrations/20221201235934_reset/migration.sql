-- CreateTable
CREATE TABLE "TodoItemData" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "text" TEXT NOT NULL,
    "date" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "TodoItemData_id_key" ON "TodoItemData"("id");
