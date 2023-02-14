-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Project" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "coverImageUrl" TEXT NOT NULL,
    "lookingFor" TEXT,
    "hiringType" TEXT,
    "whyDescription" TEXT NOT NULL,
    "whatDescription" TEXT NOT NULL,
    "howDescription" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "publishedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Project" ("coverImageUrl", "description", "hiringType", "howDescription", "id", "lookingFor", "title", "whatDescription", "whyDescription") SELECT "coverImageUrl", "description", "hiringType", "howDescription", "id", "lookingFor", "title", "whatDescription", "whyDescription" FROM "Project";
DROP TABLE "Project";
ALTER TABLE "new_Project" RENAME TO "Project";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
