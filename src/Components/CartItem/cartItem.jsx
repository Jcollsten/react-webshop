import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../context/ShopContext';
import { CiCirclePlus } from 'react-icons/ci';
import { CiCircleMinus } from 'react-icons/ci';
import { CiTrash } from 'react-icons/ci';

export default function CartItem({ product, quantity }) {
  const { removeFromCart, addToCart, deleteFromCart } = useContext(ShopContext);

  const roundedDiscount = Math.ceil(product.discountPercentage);
  const discountedPrice = product.stock <= 50 ? Math.floor(product.price * (1 - roundedDiscount / 100)) : product.price;

  return (
    <div className='flex justify-center flex-col items-center flex-wrap gap-5 mt-7 p-4 shadow-md rounded w-[90%] sm:flex-row  sm:w-[80%] md:w-[70%] lg:w-[60%] lg:h-[10vw] bg-gray-200 border-l-4 border-gray-700  '>
      <div className='flex justify-center w-1/4 '>
        <img
          src={product.thumbnail}
          alt='product'
          className='md:w-[12vw] md:h-[10vw] rounded'
        />
      </div>
      <div className='flex flex-col items-center justify-center w-1/4 gap-5 '>
        <div>
          <Link to={`/ProductPage/${product.id}`}>
            <h2 className='text-xl'>{product.title}</h2>
            <p className='flex items-center gap-2'>${discountedPrice}</p>
            {product.stock <= 50 && <p className='flex items-center gap-2 line-through'>${product.price}</p>}
          </Link>
        </div>
      </div>
      <div className='flex flex-col items-center justify-center w-1/4 gap-2'>
        <p className='text-xl font-semibold'>Total ${product.stock <= 50 ? discountedPrice * quantity : product.price * quantity}</p>
        <div className='flex items-center justify-center gap-2'>
          <button onClick={() => removeFromCart(product.id)}>
            <CiCircleMinus className='text-2xl hover:scale-110' />
          </button>
          <span className='font-semibold text-l'>{quantity}</span>
          <button onClick={() => addToCart(product.id)}>
            <CiCirclePlus className='text-2xl hover:scale-110' />
          </button>
          <button onClick={() => deleteFromCart(product.id)}>
            <CiTrash className='text-2xl hover:scale-110' />
          </button>
        </div>
      </div>
    </div>
  );
}
