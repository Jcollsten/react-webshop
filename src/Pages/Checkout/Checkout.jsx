import React, { useContext } from 'react';
import { ShopContext } from '../../context/ShopContext';
import CartItem from '../../Components/CartItem/cartItem';

export default function Checkout() {
  const { products, cartItems } = useContext(ShopContext);

  // Filter products based on the items present in the cart
  const cartProducts = products.filter((product) => cartItems[product.id] > 0);

  return (
    <div className='bg-gray-100'>
      <div className=' pt-5 pb-5'>
        <h1 className='flex justify-center items-center text-5xl font-semi'>Checkout! 💥 </h1>
      </div>
      <div className='flex justify-center items-center flex-col '>
        {cartProducts.map((product) => (
          <CartItem
            key={product.id}
            product={product}
            quantity={cartItems[product.id]}
          />
        ))}
      </div>
      <div className=' bg-gray-200 mx-auto p-6 shadow-md rounded w-2/4 mt-20 mb-20 '>
        <h2 className='text-2xl font-semibold mb-4'>Checkout</h2>
        <div className='flex justify-center items-center flex-col mb-4'>
          <label
            className='block text-gray-900 font-semibold mb-2'
            htmlFor='firstName'
          >
            First Name
          </label>
          <input
            type='text'
            id='firstName'
            className='form-input w-1/3 h-10 rounded-md p-2 mb-4'
          />
          <label
            className='block text-gray-900 font-semibold mb-2'
            htmlFor='firstName'
          >
            Last Name
          </label>
          <input
            type='text'
            id='firstName'
            className='form-input w-1/3 h-10 rounded-md p-2 mb-4'
          />
          <label
            className='block text-gray-900 font-semibold mb-2'
            htmlFor='firstName'
          >
            Email
          </label>
          <input
            type='text'
            id='firstName'
            className='form-input w-1/3 h-10 rounded-md p-2 mb-4'
          />
          <label
            className='block text-gray-900 font-semibold mb-2'
            htmlFor='firstName'
          >
            Home Adress
          </label>
          <input
            type='text'
            id='firstName'
            className='form-input w-1/3 h-10 rounded-md p-2 mb-4'
          />
          <label
            className='block text-gray-900 font-semibold mb-2'
            htmlFor='firstName'
          >
            Postal/zip code
          </label>
          <input
            type='text'
            id='firstName'
            className='form-input w-1/3 h-10 rounded-md p-2 mb-4'
          />
          <label
            className='block text-gray-900 font-semibold mb-2'
            htmlFor='firstName'
          >
            City
          </label>
          <input
            type='text'
            id='firstName'
            className='form-input w-1/3 h-10 rounded-md p-2 mb-4'
          />
          <label
            className='block text-gray-900 font-semibold mb-2 '
            htmlFor='firstName'
          >
            Other notes
          </label>
          <input
            type='text'
            id='firstName'
            className='form-input w-1/3 h-10 rounded-md p-2 mb-4'
          />
        </div>
      </div>
    </div>
  );
}
