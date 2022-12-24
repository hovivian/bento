-- CreateTable
CREATE TABLE "Dish" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "stripeId" INTEGER NOT NULL,
    "image" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "qty" INTEGER NOT NULL DEFAULT 1,

    CONSTRAINT "Dish_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Category" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SavedDish" (
    "id" SERIAL NOT NULL,

    CONSTRAINT "SavedDish_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Order" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deliveryDate" TIMESTAMP(3) NOT NULL,
    "deliveryAddress" TEXT NOT NULL,
    "recipient" TEXT NOT NULL,
    "phoneNum" INTEGER NOT NULL,
    "orderCompleted" BOOLEAN NOT NULL,
    "total" INTEGER NOT NULL,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_DishToSavedDish" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_DishToOrder" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_CategoryToDish" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_DishToSavedDish_AB_unique" ON "_DishToSavedDish"("A", "B");

-- CreateIndex
CREATE INDEX "_DishToSavedDish_B_index" ON "_DishToSavedDish"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_DishToOrder_AB_unique" ON "_DishToOrder"("A", "B");

-- CreateIndex
CREATE INDEX "_DishToOrder_B_index" ON "_DishToOrder"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CategoryToDish_AB_unique" ON "_CategoryToDish"("A", "B");

-- CreateIndex
CREATE INDEX "_CategoryToDish_B_index" ON "_CategoryToDish"("B");

-- AddForeignKey
ALTER TABLE "_DishToSavedDish" ADD FOREIGN KEY ("A") REFERENCES "Dish"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DishToSavedDish" ADD FOREIGN KEY ("B") REFERENCES "SavedDish"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DishToOrder" ADD FOREIGN KEY ("A") REFERENCES "Dish"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DishToOrder" ADD FOREIGN KEY ("B") REFERENCES "Order"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CategoryToDish" ADD FOREIGN KEY ("A") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CategoryToDish" ADD FOREIGN KEY ("B") REFERENCES "Dish"("id") ON DELETE CASCADE ON UPDATE CASCADE;
