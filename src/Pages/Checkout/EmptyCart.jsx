import React from "react";
import { Link } from "react-router-dom";

// Just a simple component that shows while the checkout/cart is empty
export default function EmptyCart() {
  return (
    <div className="h-[60vh] pb-20 flex justify-center items-center flex-col">
      <p className="text-2xl">Cart is empty</p>
      <Link to="/shop">
        <button className=" border border-gray-800 rounded mt-10 py-4 px-7 bg-gray-200 active:scale-105">
          Back To shop!
        </button>
      </Link>
    </div>
  );
}
