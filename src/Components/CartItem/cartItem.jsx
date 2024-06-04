import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../../context/ShopContext";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { CiTrash } from "react-icons/ci";

// The CartItem component is a big component in this project that fill alot of functions. First of all its the product card in the productlist
// and holds the design of those cards. I does a calc based on available stock, and just for the sake use using the discount, i made it so that if the
// stock is less than 50, the discount applies. Its just a mock to use that value.
export default function CartItem({ product, quantity }) {
  const { removeFromCart, addToCart, deleteFromCart, discountedPrice } =
    useContext(ShopContext);
  const discPrice = discountedPrice(product);

  // Above ive imported what i need to access from my context, and also created a variable that will gold the discounted price for the product.(see context)
  // Bwlow is mainly tailwind for designing how the item should look visually. At the end i refer to the add and reove functions to be able to adjust the amount of the product (see context)
  return (
    <div className="flex justify-center flex-col items-center flex-wrap gap-5 mt-7 p-4 shadow-md rounded w-[90%] sm:flex-row  sm:w-[80%] md:w-[70%] lg:w-[60%] lg:h-[15vw] bg-gray-200 border-l-4 border-gray-700  ">
      <div className="flex justify-center items-center w-1/4 ">
        <img
          src={product.thumbnail}
          alt="product"
          className="md:w-[15vw] md:h-[12vw] rounded"
        />
      </div>
      <div className=" w-1/4 gap-5 ">
        <div className="">
          <Link to={`/ProductPage/${product.id}`}>
            <h2 className="text-xl">{product.title}</h2>
            <p className="flex items-center gap-2">${discPrice}</p>
            {product.stock <= 50 && (
              <p className="flex items-center gap-2 line-through">
                ${product.price}
              </p>
            )}
          </Link>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-1/4 gap-2">
        <p className="text-xl font-semibold">
          Total $
          {product.stock <= 50
            ? discPrice * quantity
            : product.price * quantity}
        </p>
        <div className="flex items-center justify-center gap-2">
          <button onClick={() => removeFromCart(product.id)}>
            <CiCircleMinus className="text-2xl hover:scale-110" />
          </button>
          <span className="font-semibold text-l">{quantity}</span>
          <button onClick={() => addToCart(product.id)}>
            <CiCirclePlus className="text-2xl hover:scale-110" />
          </button>
          <button onClick={() => deleteFromCart(product.id)}>
            <CiTrash className="text-2xl hover:scale-110" />
          </button>
        </div>
      </div>
    </div>
  );
}
