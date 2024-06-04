import React from "react";
import { useState } from "react";

export default function CustomerInformation({ onPlaceOrder }) {
  // state to manage the form fields
  const [customerData, setCustomerData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    zip: "",
    city: "",
  });
  // handles the updates in fields
  const handleChange = (e) => {
    const { id, value } = e.target;
    setCustomerData((data) => ({ ...data, [id]: value }));
  };

  // Handles the submitt of the form, trims any extra spaces and calls placeorder with customerdata. If a field is empty, it alerts.
  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(customerData).every((field) => field.trim() !== "")) {
      onPlaceOrder(customerData);
      console.log(customerData);
    } else {
      alert("Please fill out the form");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-center flex-col items-center flex-wrap gap-5 mt-7 p-4 shadow-md rounded w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] bg-gray-200 border-l-4 border-gray-700 mx-auto "
    >
      <h2 className="mb-4 text-2xl font-semibold text-center">
        Customer information
      </h2>

      <div className="flex justify-center items-center flex-col w-[50vw]">
        <input
          type="text"
          id="firstName"
          placeholder="First Name "
          className="form-input h-10 rounded-md p-2 mb-4 w-[70%]"
          onChange={handleChange}
        />

        <input
          type="text"
          id="lastName"
          placeholder="Last Name"
          className="form-input h-10 rounded-md p-2 mb-4 w-[70%]"
          onChange={handleChange}
        />

        <input
          type="email"
          id="email"
          placeholder="Email"
          className="form-input h-10 rounded-md p-2 mb-4 w-[70%]"
          onChange={handleChange}
        />
        <input
          type="phone"
          id="phone"
          placeholder="Phone"
          className="form-input h-10 rounded-md p-2 mb-4 w-[70%]"
          onChange={handleChange}
        />

        <input
          type="adress"
          id="address"
          placeholder="Adress"
          className="form-input h-10 rounded-md p-2  w-[70%]"
          onChange={handleChange}
        />
      </div>
      <div className="flex justify-center items-center gap-2 w-[35vw] ">
        <input
          type="number"
          id="zip"
          placeholder="Postal/Zip"
          className=" form-input h-10 rounded-md p-2 mb-4 w-[50%]"
          onChange={handleChange}
        />

        <input
          type="text"
          id="city"
          placeholder="City"
          className=" form-input h-10 rounded-md p-2 mb-4 w-[50%]"
          onChange={handleChange}
        />
      </div>
      <div className="flex justify-center ">
        <button
          type="submit"
          className="border border-gray-800 rounded mt-10 py-4 px-7 hover:bg-green-700 active:scale-105 w-[100%]"
        >
          Place Order
        </button>
      </div>
    </form>
  );
}
