import React from "react";

export const ProductCard = ({ product }) => {
  return (
    <div className="flex flex-col items-center w-full">
      <img src={product.image} alt="product" className="w-52 h-64" />
      <p>{product.brand}</p>
      <p className="w-11/12 line-clamp-1 text-center">{product.description}</p>
      <div className="flex items-center justify-around">
        <span className="mr-2 font-semibold">₹{product.actualPrice}</span>
        <span className="mr-2 line-through text-gray-500">
          ₹{product.discountPrice}
        </span>
        <span className="text-green-600 text-sm">
          {product.discountPercent}% off
        </span>
      </div>
      <button className="bg-gray-200 px-4 py-1 mt-2 rounded-md w-11/12 mx-auto">
        Add to cart
      </button>
    </div>
  );
};
