/*
  Warnings:

  - The values [OTHER] on the enum `AppliedSource` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "AppliedSource_new" AS ENUM ('LINKEDIN', 'COMPANY_CAREER_PAGE', 'REFERRAL', 'INDEED', 'NAUKRI', 'INSTAHYRE', 'CUTSHORT', 'WELLFOUND', 'GLASSDOOR', 'CAMPUS_PLACEMENT', 'COLD_MAILING');
ALTER TABLE "public"."Application" ALTER COLUMN "appliedSource" DROP DEFAULT;
ALTER TABLE "Application" ALTER COLUMN "appliedSource" TYPE "AppliedSource_new" USING ("appliedSource"::text::"AppliedSource_new");
ALTER TYPE "AppliedSource" RENAME TO "AppliedSource_old";
ALTER TYPE "AppliedSource_new" RENAME TO "AppliedSource";
DROP TYPE "public"."AppliedSource_old";
ALTER TABLE "Application" ALTER COLUMN "appliedSource" SET DEFAULT 'LINKEDIN';
COMMIT;
