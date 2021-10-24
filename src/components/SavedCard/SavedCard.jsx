import React from "react";
import { useData } from "../../context/DataProvider";

export const SavedCard = () => {
  const {
    data: { savedItems },
    dispatch,
  } = useData();

  return savedItems.map((product) => (
    <div
      className="flex items-center my-4 bg-gray-100 py-2 px-4"
      key={product.id}
    >
      <img src={product.image} alt="product" className="w-44 h-44" />

      <span className="ml-5 flex flex-col text-left">
        <p className="py-1">{product.brand}</p>
        <p className="py-1">{product.description}</p>
        <div className="pt-4">
          <span>₹{product.discountPrice}</span>
          <span className="ml-2 text-gray-500 line-through">
            ₹{product.actualPrice}
          </span>
          <span className="ml-2 text-green-600 text-sm">
            {product.discountPercent}% off
          </span>
        </div>
        <div className="flex items-center mt-8">
          <button
            className="font-semibold"
            onClick={() => dispatch({ type: "ADD_TO_CART", payload: product })}
          >
            MOVE TO CART
          </button>
          <button
            className="ml-10 font-semibold"
            onClick={() =>
              dispatch({ type: "REMOVE_FROM_SAVED", payload: product.id })
            }
          >
            REMOVE
          </button>
        </div>
      </span>
    </div>
  ));
};
