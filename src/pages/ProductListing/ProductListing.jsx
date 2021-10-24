import React from "react";
import { Navbar, ProductCard } from "../../components";
import { useProducts } from "../../context/ProductsProvider";

export const ProductListing = () => {
  const { products } = useProducts();

  return (
    <>
      <Navbar />
      <div className="grid grid-cols-4 max-w-5xl gap-6 mx-auto mt-10 mb-8">
        {products.map((product) => (
          <ProductCard product={product} />
        ))}
      </div>
    </>
  );
};
