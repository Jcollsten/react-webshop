import React from "react";
import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { CiTrash } from "react-icons/ci";

export default function CartItem({ product, quantity }) {
  const { removeFromCart, addToCart, deleteFromCart } = useContext(ShopContext);

  return (
    <div className="flex justify-center items-center flex-wrap mt-7 p-4 shadow-md rounded w-2/4 bg-gray-200 border-l-4 border-gray-700 ">
      <div className="flex justify-center w-1/3 ">
        <img
          src={product.thumbnail}
          alt="product"
          className="w-[8vw] h-[5vw] rounded"
        />
      </div>

      <div className="flex justify-center items-center flex-col gap-5  w-1/3 ">
        <div>
          <h2 className="text-xl">{product.title}</h2>
          <p className="text-l font-semibold text-center">${product.price} </p>
        </div>
      </div>
      <div className="flex justify-center items-center flex-col gap-2 w-1/3">
        <p className="text-xl font-semibold">
          Total ${product.price * quantity}
        </p>
        <div className="flex justify-center items-center  gap-2">
          <button onClick={() => removeFromCart(product.id)}>
            <CiCircleMinus className=" text-2xl hover:scale-110" />
          </button>
          <span className="text-l font-semibold">{quantity}</span>
          <button onClick={() => addToCart(product.id)}>
            <CiCirclePlus className="text-2xl hover:scale-110" />
          </button>
          <button onClick={() => deleteFromCart(product.id)}>
            <CiTrash className=" text-2xl  hover:scale-110" />
          </button>
        </div>
      </div>
    </div>
  );
}
