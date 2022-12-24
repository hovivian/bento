import ProductCard from "./ProductCard";

export default function Products({ products }) {
  return (
    <>
      {products.map((i) => (
        <ProductCard key={i.id} price={i} />
      ))}
    </>
  );
}
