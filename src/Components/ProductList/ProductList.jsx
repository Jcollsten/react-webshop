import React, { useContext } from 'react';
import './ProductList.css';
import { ShopContext } from '../../context/ShopContext';
import { Link } from 'react-router-dom';

import { CiStar, CiDiscount1 } from 'react-icons/ci';

function ProductList() {
  const { products, addToCart, cartItems } = useContext(ShopContext);

  return (
    <div className='flex bg-gray-100 justify-center items-center'>
      <ul className='flex flex-wrap w-[70vw] justify-between'>
        {products.map((product) => {
          const ItemsInCart = cartItems[product.id] || 0; // set it to 0 if no value is found
          const roundedDiscount = Math.ceil(product.discountPercentage);
          const discountedPrice = product.stock <= 50 ? Math.floor(product.price * (1 - roundedDiscount / 100)) : product.price;
          const discountApplied = product.stock <= 50;
          return (
            <div
              className='bg-white p-4 border-2 rounded-md m-2 flex flex-col h-[18vw] relative  '
              style={{ width: 'calc(25% - 1rem)' }}
              key={product.id}
            >
              <li>
                <Link to={`/ProductPage/${product.id}`}>
                  <img
                    src={product.images[0]}
                    alt='product'
                    className='w-full object-contain h-48 rounded mb-4'
                  />
                  <h2 className='mt-10'>{product.title}</h2>
                </Link>
                <div className='flex gap-5 '>
                  <div>
                    <p className='flex items-center gap-2'>${discountedPrice}</p>
                  </div>
                  {product.stock <= 50 && (
                    <div>
                      <p className='flex items-center gap-2 line-through text-red-600'>${product.price}</p>
                    </div>
                  )}
                  {discountApplied && (
                    <div>
                      <p className='absolute top-5 right-5 flex items-center text-2xl font-bold text-red-600'>
                        <CiDiscount1 />
                        {roundedDiscount}%
                      </p>
                    </div>
                  )}
                  <div>
                    <p className='flex items-center gap-2'>
                      <CiStar />
                      {product.rating}
                    </p>
                  </div>
                  {/* <div>
                    <p className='flex items-center gap-2'>{product.stock}</p>
                  </div> */}
                </div>

                <button
                  className='flex justify-center items-center border border-gray-800 rounded p-4 w-full h-10 mt-20 '
                  onClick={() => addToCart(product.id)}
                >
                  Add to Cart{ItemsInCart > 0 && ` (${ItemsInCart})`}
                </button>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default ProductList;
