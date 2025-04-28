/*
  Warnings:

  - The `moods` column on the `Entry` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `score` to the `Entry` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Entry" ADD COLUMN     "score" INTEGER NOT NULL,
DROP COLUMN "moods",
ADD COLUMN     "moods" TEXT[];
