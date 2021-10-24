import React from "react";
import { useData } from "../../context/DataProvider";

export const EmptyCart = () => {
  const {
    data: { cartItems },
  } = useData();

  return (
    <div
      className={`w-full h-52 flex items-center justify-center ${
        cartItems.length > 0 && "bg-gray-200"
      }`}
    >
      <p className="font-semibold text-lg">Cart is Empty!</p>
    </div>
  );
};
