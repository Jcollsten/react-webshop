import React from "react";
import { Link } from "react-router-dom";

export default function EmptyCart() {
  return (
    <div className="bg-gray-100 pb-20 flex justify-center items-center flex-col">
      <p className="text-2xl">Cart is empty</p>
      <Link to="/shop">
        <button className=" border border-gray-800 rounded mt-10 py-4 px-7 bg-gray-200 active:scale-105">
          Back To shop!
        </button>
      </Link>
    </div>
  );
}
