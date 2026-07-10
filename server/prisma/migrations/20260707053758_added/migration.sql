/*
  Warnings:

  - The `appliedSource` column on the `Application` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "AppliedSource" AS ENUM ('LINKEDIN', 'COMPANY_CAREER_PAGE', 'REFERRAL', 'INDEED', 'NAUKRI', 'INSTAHYRE', 'CUTSHORT', 'WELLFOUND', 'GLASSDOOR', 'CAMPUS_PLACEMENT', 'OTHER');

-- AlterTable
ALTER TABLE "Application" DROP COLUMN "appliedSource",
ADD COLUMN     "appliedSource" "AppliedSource" NOT NULL DEFAULT 'LINKEDIN';
