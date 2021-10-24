import React from "react";
import { Navbar } from "../../components";
import { CartCard } from "../../components/CartCard/CartCard";
import { EmptyCart } from "../../components/EmptyCart";
import { SavedCard } from "../../components/SavedCard/SavedCard";
import { TotalCard } from "../../components/TotalCard";
import { useData } from "../../context/DataProvider";

export const Cart = () => {
  const {
    data: { cartItems, savedItems },
  } = useData();

  return (
    <>
      <Navbar />
      <div className="flex justify-between max-w-5xl mx-auto">
        <div className="my-8">
          <span className="font-semibold text-lg">{`My Cart (${cartItems.length})`}</span>

          <div className="my-2">
            {cartItems.length > 0 ? <CartCard /> : <EmptyCart />}
          </div>

          <span className="font-semibold text-lg mt-8">{`Saved For Later (${savedItems.length})`}</span>
          <div>
            <SavedCard />
          </div>
        </div>
        <div className="mt-8">
          <TotalCard />
        </div>
      </div>
    </>
  );
};
