/*
  Warnings:

  - You are about to drop the `Dish` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Order` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `SavedDish` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_DishToOrder` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_DishToSavedDish` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_DishToOrder" DROP CONSTRAINT "_DishToOrder_A_fkey";

-- DropForeignKey
ALTER TABLE "_DishToOrder" DROP CONSTRAINT "_DishToOrder_B_fkey";

-- DropForeignKey
ALTER TABLE "_DishToSavedDish" DROP CONSTRAINT "_DishToSavedDish_A_fkey";

-- DropForeignKey
ALTER TABLE "_DishToSavedDish" DROP CONSTRAINT "_DishToSavedDish_B_fkey";

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
