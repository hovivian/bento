/* eslint-disable semi */
/* eslint-disable quotes */
import Stripe from "stripe";
import { useState } from "react";
import Pagination from "@/components/Pagination";
import Products from "@/components/Products";

export default function Menu({ prices = [] }) {
  const [category, setCategory] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(12);

  const result = prices.filter((price) =>
    price.product.metadata.category.includes(category)
  );

  const sushiBtnHandler = () => {
    setCategory("sushi");
  };

  const rollBtnHandler = () => {
    setCategory("roll");
  };

  const sashimiBtnHandler = () => {
    setCategory("sashimi");
  };

  const allBtnHandler = () => {
    setCategory("");
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = result.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <div className="page-header-bg">
        <h1 className="my-3 p-3 page-header">Menu</h1>
      </div>

      <div className="categories mt-5 d-flex justify-content-center align-items-center">
        <button
          type="button"
          className="categoriesBtn ms-3 me-3"
          onClick={allBtnHandler}
        >
          All
        </button>
        <button
          type="button"
          className="categoriesBtn"
          onClick={sushiBtnHandler}
        >
          Sushi
        </button>
        <button
          type="button"
          className="categoriesBtn ms-3 me-3"
          onClick={rollBtnHandler}
        >
          Roll
        </button>
        <button
          type="button"
          className="categoriesBtn me-3"
          onClick={sashimiBtnHandler}
        >
          Sashimi
        </button>
      </div>

      <div className="mb-5 d-flex flex-wrap justify-content-around">
        <Products products={currentProducts} />
      </div>

      <Pagination
        productsPerPage={productsPerPage}
        totalProducts={result.length}
        paginate={paginate}
      />
    </div>
  );
}

export async function getServerSideProps() {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  const { data: prices } = await stripe.prices.list({
    active: true,
    limit: 36,
    expand: ["data.product"],
  });

  return {
    props: {
      prices,
    },
  };
}
