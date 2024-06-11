import React, { useContext } from 'react';
import { ShopContext } from '../../context/ShopContext';
import { Link } from 'react-router-dom';

import { CiStar } from 'react-icons/ci';

function ProductList() {
  const { products, addToCart, cartItems, roundedDiscount, discountedPrice, category } = useContext(ShopContext);
  // filter out the fetched products based on the chosen filter below
  const categoryFilter = category ? products.filter((product) => product.category === category) : products;

  return (
    <div className='flex items-center justify-center bg-gray-100 '>
      <ul className='flex flex-wrap w-[90vw] md:w-[70vw] justify-between'>
        {categoryFilter.map((product) => {
          const ItemsInCart = cartItems[product.id] || 0; // set it to 0 if no value is found
          const discountApplied = product.stock <= 50;
          const roundedDisc = roundedDiscount(product);
          const discPrice = discountedPrice(product);
          return (
            <div
              className='hover:scale-105 bg-white p-4 border-2 rounded-md m-2 flex flex-col h-auto relative w-full sm:w-[47%] md:w-[47%] lg:w-[23%] justify-between overflow-hidden '
              key={product.id}
            >
              <li className='flex flex-col h-full'>
                <Link
                  to={`/ProductPage/${product.id}`}
                  className='flex-grow'
                >
                  <img
                    src={product.images[0]}
                    alt='product'
                    className='object-contain w-full h-48 mb-4 rounded'
                  />
                  <h2 className='mt-2 text-lg font-bold'>{product.title}</h2>
                </Link>
                <div className="flex gap-4 p-2 mt-2 text-l ' ">
                  <div className='flex items-center justify-between'>
                    <p className='font-semibold '>${discPrice}</p>
                  </div>
                  {product.stock <= 50 && (
                    <div>
                      <p className='text-gray-400 line-through '>${product.price}</p>
                    </div>
                  )}
                </div>
                {discountApplied && <p className='absolute flex items-center p-1 font-semibold text-white bg-red-500 w-[30vw] sm:w-[20vw] md:w-[15vw] lg:w-[10vw] rotate-45 justify-center rounded text-l top-2 right-[-10vw] sm:right-[-5vw] md:right-[-5vw] lg:right-[-4vw]'>{roundedDisc}%</p>}
                <div>
                  <p className='absolute flex items-center gap-2 p-2 top-2 left-2 text-l'>
                    <CiStar />
                    {product.rating}
                  </p>
                </div>

                <button
                  className='w-full p-2 mt-auto text-black bg-white border border-gray-800 rounded hover:bg-gray-200'
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
