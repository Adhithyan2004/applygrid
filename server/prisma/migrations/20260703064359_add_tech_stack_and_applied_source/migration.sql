/*
  Warnings:

  - The values [WITHDRAWN] on the enum `ApplicationStatus` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "ApplicationStatus_new" AS ENUM ('APPLIED', 'INTERVIEW', 'OFFER', 'REJECTED', 'GHOSTED');
ALTER TABLE "Application" ALTER COLUMN "currentStatus" TYPE "ApplicationStatus_new" USING ("currentStatus"::text::"ApplicationStatus_new");
ALTER TABLE "ApplicationStatusHistory" ALTER COLUMN "status" TYPE "ApplicationStatus_new" USING ("status"::text::"ApplicationStatus_new");
ALTER TYPE "ApplicationStatus" RENAME TO "ApplicationStatus_old";
ALTER TYPE "ApplicationStatus_new" RENAME TO "ApplicationStatus";
DROP TYPE "public"."ApplicationStatus_old";
COMMIT;

-- AlterTable
ALTER TABLE "Application" ADD COLUMN     "appliedSource" TEXT,
ADD COLUMN     "techStack" TEXT[] DEFAULT ARRAY[]::TEXT[];
