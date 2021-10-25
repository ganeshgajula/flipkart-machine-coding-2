import React from "react";
import { useData } from "../../context/DataProvider";

export const TotalCard = () => {
  const {
    data: { cartItems },
  } = useData();

  const getTotalPrice = (cartItems) => {
    const totalPrice = cartItems.reduce(
      (total, product) => total + product.actualPrice * product.quantity,
      0
    );
    return totalPrice;
  };

  const getTotalDiscount = (cartItems) => {
    const discountedPrice = cartItems.reduce(
      (total, product) =>
        total +
        (product.actualPrice - product.discountPrice) * product.quantity,
      0
    );
    return discountedPrice;
  };

  const totalAmount = getTotalPrice(cartItems);
  const discountedAmount = getTotalDiscount(cartItems);
  const payableAmount = totalAmount - discountedAmount;

  return (
    <div className="w-80 p-3 bg-gray-100">
      <p className="font-semibold text-lg text-left">Price Details</p>
      <div className="flex flex-col justify-between">
        <div className="flex justify-between mt-4 mb-2">
          <span>{`Price (${cartItems.length} Items)`}</span>
          <span>₹{totalAmount}</span>
        </div>
        <div className="flex justify-between py-2">
          <span>Discount</span>
          <span className="text-green-600">- ₹{discountedAmount}</span>
        </div>

        <div className="flex justify-between py-2">
          <span>Delivery Charges</span>
          <span className="text-green-600">FREE</span>
        </div>
        <div className="flex justify-between py-2 font-semibold text-lg">
          <span>Total Amount</span>
          <span>₹{payableAmount}</span>
        </div>
        <span className="font-bold text-green-600 text-left py-2">
          Your will save ₹{discountedAmount} on this order
        </span>
      </div>
    </div>
  );
};
