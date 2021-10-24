import React from "react";
import { DecrementIcon } from "../../assets/DecrementIcon";
import { IncrementIcon } from "../../assets/IncrementIcon";
import { useData } from "../../context/DataProvider";

export const CartCard = () => {
  const {
    data: { cartItems },
    dispatch,
  } = useData();

  return cartItems.map((product) => (
    <div
      className="flex items-center my-4 bg-gray-100 py-2 px-4"
      key={product.id}
    >
      <img src={product.image} alt="product" className="w-44 h-44" />

      <span className="ml-5 flex flex-col text-left">
        <p className="py-1">{product.brand}</p>
        <p className="py-1">{product.description}</p>
        <div className="py-1">
          <span>₹{product.discountPrice}</span>
          <span className="ml-2 text-gray-500 line-through">
            ₹{product.actualPrice}
          </span>
          <span className="ml-2 text-green-600 text-sm">
            {product.discountPercent}% off
          </span>
        </div>
        <div className="flex items-center my-2">
          <button
            className="mr-1 cursor-pointer"
            onClick={() =>
              dispatch({ type: "DECREMENT_QTY", payload: product.id })
            }
            disabled={product.quantity < 2 && true}
          >
            <DecrementIcon />
          </button>
          <span className="text-lg">{product.quantity}</span>
          <button
            className="ml-1 cursor-pointer"
            onClick={() =>
              dispatch({ type: "INCREMENT_QTY", payload: product.id })
            }
          >
            <IncrementIcon />
          </button>
        </div>
        <div className="flex items-center mt-2">
          <button
            className="font-semibold"
            onClick={() =>
              dispatch({ type: "ADD_TO_SAVE_LATER", payload: product })
            }
          >
            SAVE FOR LATER
          </button>
          <button
            className="ml-10 font-semibold"
            onClick={() =>
              dispatch({ type: "REMOVE_FROM_CART", payload: product.id })
            }
          >
            REMOVE
          </button>
        </div>
      </span>
    </div>
  ));
};
