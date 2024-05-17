import React from "react";

export default function CustomerInformation() {
  return (
    <div className="bg-gray-200 mx-auto p-6 shadow-md rounded w-2/4 mt-20 border-l-4 border-gray-700 ">
      <h2 className="text-2xl font-semibold mb-4 text-center">
        Customer information
      </h2>

      <div className="flex justify-center items-center flex-col">
        <input
          type="text"
          id="firstName"
          placeholder="First Name"
          className="form-input h-10 rounded-md p-2 mb-4 w-full"
        />

        <input
          type="text"
          id="lastName"
          placeholder="Last Name"
          className="form-input h-10 rounded-md p-2 mb-4 w-full"
        />

        <input
          type="email"
          id="email"
          placeholder="Email"
          className="form-input h-10 rounded-md p-2 mb-4 w-full"
        />

        <input
          type="adress"
          id="homeAdress"
          placeholder="Adress"
          className="form-input h-10 rounded-md p-2 mb-4 w-full"
        />
      </div>
      <div className="flex justify-center gap-2 ">
        <input
          type="number"
          id="zip"
          placeholder="Postal/Zip"
          className=" form-input h-10 rounded-md p-2 mb-4 w-full"
        />

        <input
          type="text"
          id="city"
          placeholder="City"
          className=" form-input h-10 rounded-md p-2 mb-4 w-full"
        />
      </div>
      <div className="flex justify-center ">
        <button className="border border-gray-800 rounded mt-10 py-4 px-7 hover:bg-green-700 active:scale-105 w-[80%]">
          Place Order
        </button>
      </div>
    </div>
  );
}
