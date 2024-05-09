import React, { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { Link } from "react-router-dom";

export default function Checkout() {
  return (
    <div className=" bg-gray-100">
      <Navbar />
      <div className="bg-white">PRODUCT LIST</div>
      <div className="max-w-md mx-auto p-6 rounded-lg ">
        <h2 className="text-2xl font-semibold mb-4">Checkout</h2>
        <div className="mb-4">
          <label
            className="block text-gray-900 font-semibold mb-2"
            htmlFor="firstName"
          >
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            className="form-input w-full rounded-md"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-900 font-semibold mb-2"
            htmlFor="lastName"
          >
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            className="form-input w-full rounded-md"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-900 font-semibold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="form-input w-full rounded-md"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-900 font-semibold mb-2"
            htmlFor="address"
          >
            Address
          </label>
          <textarea
            id="address"
            className="form-textarea w-full rounded-md"
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-gray-900 font-semibold mb-2">
            Payment Method
          </label>
          <select className="form-select w-full rounded-md">
            <option value="">Select Payment Method</option>
            <option value="credit_card">Credit Card</option>
            <option value="klarna_card">Klarna-card</option>
          </select>
        </div>
        <Link to="/Shop">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md m-4"
            // onClick={handleCheckout}
          >
            Back to Shop
          </button>
        </Link>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md"
          // onClick={handleCheckout}
        >
          Checkout
        </button>
      </div>
    </div>
  );
}

// export default Checkout;
