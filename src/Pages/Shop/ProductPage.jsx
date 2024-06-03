import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../../context/ShopContext';

import { CiTrash, CiCirclePlus, CiCircleMinus } from 'react-icons/ci';

export default function ProductPage() {
  const { productId } = useParams(); // react hook that reads the URL so when url is productpage/2 it can extract the 2 and use as ID below in search.
  const { products, addToCart, cartItems, removeFromCart, deleteFromCart, discountedPrice } = useContext(ShopContext);

  // Searching for the product object at matches it to productId (pased to make sure its a number)
  const product = products.find((product) => product.id === parseInt(productId));
  const ItemsInCart = cartItems[product.id] || 0;
  const discPrice = discountedPrice(product);

  return (
    <div className='py-20 bg-gray-200 '>
      <div className='flex flex-col items-center justify-center max-w-2xl p-10 mx-auto bg-white rounded-md shadow-md md:flex-row'>
        {/* <div className='flex'> */}
        <div className='md:w-1/2'>
          <img
            src={product.images[0]}
            alt='product'
            className='w-full h-auto rounded w-3/3'
          />
        </div>
        <div className='p-8 md:w-1/2 '>
          <h2 className='text-5xl border-b-2'>{product.title}</h2>
          <h2 className='text-xl font-semibold mt-7'>Product Information</h2>
          <p>{product.description}</p>
          <h2 className='mt-2 mb-2 text-xl font-semibold'> ${discPrice}</h2>
          <div className='flex items-center justify-center gap-4 mt-8'>
            {/* <button
              className="flex items-center justify-center w-full h-10 border border-gray-800 rounded md:w-2/5"
              onClick={() => addToCart(product.id)}
            >
              Add to Cart
            </button> */}
            <div className='flex content-center justify-center gap-2 px-12'>
              <button onClick={() => removeFromCart(product.id)}>
                <CiCircleMinus className='text-2xl hover:scale-110' />
              </button>
              <span className='font-semibold text-l'> {ItemsInCart}</span>
              <button onClick={() => addToCart(product.id)}>
                <CiCirclePlus className='text-2xl hover:scale-110' />
              </button>
              <button onClick={() => deleteFromCart(product.id)}>
                <CiTrash className='text-2xl hover:scale-110' />
              </button>
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
}
