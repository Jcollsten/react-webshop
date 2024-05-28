import React, { useContext } from "react";
import { useParams } from "react-router-dom"; // Import useParams hook
import { ShopContext } from "../../context/ShopContext";
// import ItemsInCart from '../ProductList/ProductList';
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { CiTrash } from "react-icons/ci";

export default function ProductPage() {
  const { productId } = useParams(); // react hook that reads the URL so when url is productpage/2 it can extract the 2 and use as ID below in search.
  const { products, addToCart, cartItems, removeFromCart, deleteFromCart } =
    useContext(ShopContext);

  // Searching for the product object at matches it to productId (pased to make sure its a number)
  const product = products.find(
    (product) => product.id === parseInt(productId)
  );
  const ItemsInCart = cartItems[product.id] || 0;
  if (!product) {
    // if no product is found
    return <div>Product not found</div>;
  }

  return (
    <div className=" bg-gray-200 py-20">
      <div className=" bg-white mx-auto max-w-2xl flex flex-col md:flex-row items-center justify-center shadow-md rounded-md p-10">
        {/* <div className='flex'> */}
        <div className="md:w-1/2">
          <img
            src={product.images[0]}
            alt="product"
            className=" h-auto w-full rounded w-3/3 "
          />
        </div>
        <div className="md:w-1/2 p-8 ">
          <h2 className="text-5xl border-b-2">{product.title}</h2>
          <h2 className=" text-xl font-semibold mt-7">Product Information</h2>
          <p>{product.description}</p>
          <div className="flex justify-center gap-4 items-center mt-8">
            <button
              className=" flex justify-center items-center border border-gray-800 rounded w-full md:w-2/5 h-10"
              onClick={() => addToCart(product.id)}
            >
              Add to Cart
            </button>
            {/* <div className='flex justify-center px-12 content-center gap-2'> */}
            {/* <button onClick={() => removeFromCart(product.id)}>
              <CiCircleMinus className=' text-2xl hover:scale-110' />
            </button>
            <span className='text-l font-semibold'>{ItemsInCart}</span>
            <button onClick={() => addToCart(product.id)}>
              <CiCirclePlus className='text-2xl hover:scale-110' />
            </button> */}
            <button onClick={() => deleteFromCart(product.id)}>
              <CiTrash className=" text-2xl  hover:scale-110" />
            </button>
            {/* </div> */}
          </div>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
}
