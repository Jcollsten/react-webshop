import React from 'react';
import { useContext } from 'react';
import { ShopContext } from '../../context/ShopContext';

export default function CartItem({ product, quantity }) {
  const { removeFromCart, addToCart, deleteFromCart } = useContext(ShopContext);
  return (
    <div className='flex justify-center items-center flex-wrap mt-7 p-4 shadow-md rounded w-2/4 bg-gray-200 border-l-4 border-gray-700 '>
      <div className='flex justify-center w-1/3 '>
        <img
          src={product.thumbnail}
          alt='product'
          className='w-[8vw] h-[5vw] rounded'
        />
      </div>

      <div className='flex justify-center items-center flex-col gap-5  w-1/3 '>
        <div>
          <h2 className='text-2xl'>{product.title}</h2>
        </div>
        <div className='flex justify-center items-center  gap-3'>
          <button
            className=' shadow-md rounded w-7 h-7 '
            onClick={() => removeFromCart(product.id)}
          >
            ➖
          </button>
          <span className='text-2xl font-semibold'>{quantity}</span>
          <button
            className='shadow-md rounded w-7 h-7 '
            onClick={() => addToCart(product.id)}
          >
            ➕
          </button>
          <button
            className='shadow-md rounded w-7 h-7 '
            onClick={() => deleteFromCart(product.id)}
          >
            ❌
          </button>
        </div>
      </div>
      <div className='flex justify-center items-center flex-col gap-2 w-1/3'>
        <p className='text-xl font-semibold'>${product.price} </p>
        <p className='text-sm font-semibold'> Total ${product.price * quantity}</p>
      </div>
    </div>
  );
}
