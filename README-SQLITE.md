


# setup env

$ npm i md5 --save

npm install prisma -D

We use prisma to access the DB sqlite.

1. define the db config & db schema
create a folder named: prisma, and add a file named schema.prisma, content as:

```
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "sqlite"
  url      = "file:./dev.db"
}

model User {
  id    Int     @id @default(autoincrement())
  username String  @unique
  passwordHash  String?
}




```

and seeds file named migration.sql as:

```
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "username" TEXT NOT NULL,
    "passwordHash" TEXT
);
INSERT INTO "new_User" ("id", "username", "passwordHash") SELECT "id", "username", "passwordHash" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User.username_unique" ON "User"("username");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

```

and seed.js.


Then, init the db:
npx prisma migrate dev --name init

SQLite database dev.db created at file:./dev.db


npx prisma db seed --preview-feature

Now, a file named dev.db under prisima folder was generated. We can use DB Browser for SQLite on MacOS to check the data in the DB. It should contain only one table and one row of data.


## access the db with code

http://localhost:3000/scaffold/testDo




# ref

https://github.com/prisma/prisma-examples/tree/latest/javascript/rest-nextjs
