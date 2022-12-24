/*
  Warnings:

  - You are about to drop the column `address` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `passwordHash` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `phoneNum` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `role` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Dish` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Order` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `SavedDish` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_DishToOrder` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_DishToSavedDish` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Order" DROP CONSTRAINT "Order_userId_fkey";

-- DropForeignKey
ALTER TABLE "SavedDish" DROP CONSTRAINT "SavedDish_userId_fkey";

-- DropForeignKey
ALTER TABLE "_DishToOrder" DROP CONSTRAINT "_DishToOrder_A_fkey";

-- DropForeignKey
ALTER TABLE "_DishToOrder" DROP CONSTRAINT "_DishToOrder_B_fkey";

-- DropForeignKey
ALTER TABLE "_DishToSavedDish" DROP CONSTRAINT "_DishToSavedDish_A_fkey";

-- DropForeignKey
ALTER TABLE "_DishToSavedDish" DROP CONSTRAINT "_DishToSavedDish_B_fkey";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "address",
DROP COLUMN "passwordHash",
DROP COLUMN "phoneNum",
DROP COLUMN "role",
ADD COLUMN     "image" TEXT,
ALTER COLUMN "name" DROP NOT NULL,
ALTER COLUMN "email" DROP NOT NULL;

-- DropTable
DROP TABLE "Dish";

-- DropTable
DROP TABLE "Order";

-- DropTable
DROP TABLE "SavedDish";

-- DropTable
DROP TABLE "_DishToOrder";

-- DropTable
DROP TABLE "_DishToSavedDish";

-- DropEnum
DROP TYPE "Category";

-- DropEnum
DROP TYPE "orderStatus";
