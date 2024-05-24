import React from 'react';

export default function OrderSummary({ cartProducts, cartItems }) {
  return (
    <div className='flex justify-center items-center flex-col m-10 bg-gray-200 mx-auto shadow-md rounded w-2/4 border-l-4 border-gray-700 pt-4'>
      <h2 className='text-2xl font-semibold mb-4 text-center'>Order summary</h2>

      <div className='w-[40vw] m-10'>
        <div className='flex justify-between text-center'>
          <div className='w-[33%] font-semibold'>Product Name</div>
          <div className='w-[33%] font-semibold'>Quantity</div>
          <div className='w-[33%] font-semibold'>Price</div>
        </div>
        {cartProducts.map((product) => (
          <div
            key={product.id}
            className='flex justify-between text-center mt-2'
          >
            <div className='w-[33%]'>{product.title}</div>
            <div className='w-[33%]'>{cartItems[product.id]}</div>
            <div className='w-[33%] '>${product.price * cartItems[product.id]}</div>
          </div>
        ))}
        <hr className='border-gray-900 mt-4'></hr>
      </div>
      <div className='flex justify-end w-[80%] font-bold'>
        <div className='flex text-xl gap-4'>
          <div>Total cost: </div>
          <div className='mb-5 '>${cartProducts.reduce((sum, product) => sum + product.price * cartItems[product.id], 0)}</div>
        </div>
      </div>
    </div>
  );
}
