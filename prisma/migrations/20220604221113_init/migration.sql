-- CreateTable
CREATE TABLE "missionCommander" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "username" VARCHAR(255) NOT NULL,
    "mainStack" VARCHAR(255) NOT NULL,
    "currentEnrollment" INTEGER NOT NULL,
    "hasAzureCertification" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "missionCommander_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "missionCommander_name_key" ON "missionCommander"("name");

-- CreateIndex
CREATE UNIQUE INDEX "missionCommander_currentEnrollment_key" ON "missionCommander"("currentEnrollment");
