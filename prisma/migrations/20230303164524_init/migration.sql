/*
  Warnings:

  - You are about to drop the column `articleId` on the `Authors` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Authors" DROP CONSTRAINT "Authors_articleId_fkey";

-- AlterTable
ALTER TABLE "Authors" DROP COLUMN "articleId";
