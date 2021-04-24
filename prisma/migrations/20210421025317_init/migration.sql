-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "username" TEXT NOT NULL,
    "passwordHash" TEXT
);


-- CreateIndex
CREATE UNIQUE INDEX "User.email_unique" ON "User"("username");
