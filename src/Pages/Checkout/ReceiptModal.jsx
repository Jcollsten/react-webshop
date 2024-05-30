import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { Link } from "react-router-dom";

export default function ReceiptModal({
  isOpen,
  onClose,
  cartProducts,
  customerInfo,
  cartItems,
}) {
  if (!isOpen) return null;

  const totalPrice = cartProducts.reduce((sum, product) => {
    return (
      sum +
      (product.stock <= 50
        ? Math.floor(
            product.price * (1 - Math.ceil(product.discountPercentage) / 100)
          )
        : product.price) *
        cartItems[product.id]
    );
  }, 0);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 backdrop-filter backdrop-blur-md">
      <div className="flex items-center flex-col bg-white mt-24 mx-auto p-6 rounded shadow-lg max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%] xl:max-w-[50%] w-full border-l-4 border-gray-700 ">
        <div className="flex items-center flex-col">
          <h2 className="text-2xl font-bold mb-1">Order Confirmation!💥</h2>
          <p className="text-l font-bold mb-7">
            Thank you for placing your order with us!{" "}
          </p>
        </div>

        <div className="flex justify-between text-center w-full md:w-[70%] mt-2">
          <div className="w-[33%] md:w-[30%] font-semibold underline">
            Product Name
          </div>
          <div className="w-[33%] md:w-[30%] font-semibold underline">
            Quantity
          </div>
          <div className="w-[33%] md:w-[30%] font-semibold underline">
            Price
          </div>
        </div>

        <div className="flex flex-col w-full md:w-[70%]">
          {cartProducts.map((product) => (
            <div
              key={product.id}
              className="flex justify-between text-center mt-2"
            >
              <div className="w-[33%] md:w-[30%]">{product.title}</div>
              <div className="w-[33%] md:w-[30%]">{cartItems[product.id]}</div>
              <div className="w-[33%] md:w-[30%]">
                $
                {product.stock <= 50
                  ? Math.floor(
                      product.price *
                        (1 - Math.ceil(product.discountPercentage) / 100)
                    ) * cartItems[product.id]
                  : product.price * cartItems[product.id]}
              </div>
            </div>
          ))}
          <hr className="border-gray-900 mt-4"></hr>
        </div>

        <div className="flex justify-end w-full md:w-[70%] font-semibold">
          <div className="flex text-l gap-4">
            <div>Total cost: </div>
            <div className="mb-5 mr-5">${Number(totalPrice).toFixed(2)}</div>
          </div>
        </div>

        <h2 className="text-xl font-bold mb-4 mt-10">
          Delivery & Billing information
        </h2>

        <div className="flex flex-col md:flex-row md:space-x-4">
          <div className="md:w-1/2">
            <p>First Name: {customerInfo?.firstName}</p>
            <p>Last Name: {customerInfo?.lastName}</p>
            <p>Phone: {customerInfo?.phone}</p>
            <p>Email: {customerInfo?.email}</p>
            <p>Address: {customerInfo?.homeAddress}</p>
            <p>Zip: {customerInfo?.zip}</p>
            <p>City: {customerInfo?.city}</p>
          </div>
          <div className="flex justify-center items-center md:w-1/2">
            <TbTruckDelivery className="text-9xl" />
          </div>
        </div>

        <Link to="/">
          <button
            onClick={onClose}
            className="border border-gray-800 rounded mt-10 py-4 px-7 bg-gray-200 active:scale-105"
          >
            Back To Store!
          </button>
        </Link>
      </div>
    </div>
  );
}
