-- CreateTable
CREATE TABLE "ExplorerCrud" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "lang" VARCHAR(255) NOT NULL,
    "missionCommander" VARCHAR(255) NOT NULL,
    "enrollments" INTEGER NOT NULL,
    "hasCertification" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "ExplorerCrud_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ExplorerCrud_name_key" ON "ExplorerCrud"("name");

-- CreateIndex
CREATE UNIQUE INDEX "ExplorerCrud_enrollments_key" ON "ExplorerCrud"("enrollments");
