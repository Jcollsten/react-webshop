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
          const discountedPrice = product.stock <= 50 ? Math.ceil(product.price * (1 - roundedDiscount / 100)) : product.price;
          return (
            <div
              className='bg-white p-4 border-2 rounded-md m-2 mb-10 card'
              key={product.id}
            >
              <li>
                <Link to={`/ProductPage/${product.id}`}>
                  <img
                    src={product.images[0]}
                    alt='product'
                    className='w-[20vw] h-[15vw] border rounded'
                  />
                  <h2>{product.title}</h2>
                </Link>
                <div className='flex gap-5'>
                  <div>
                    <p className='flex items-center gap-2'>${discountedPrice}</p>
                  </div>
                  {product.stock <= 50 && (
                    <div>
                      <p className='flex items-center gap-2 line-through'>${product.price}</p>
                    </div>
                  )}
                  <div>
                    <p className='flex items-center gap-2'>
                      <CiStar />
                      {product.rating}
                    </p>
                  </div>
                  <div>
                    <p className='flex items-center gap-2'>{product.stock}</p>
                  </div>
                  <div>
                    <p className='flex items-center gap-2'>
                      <CiDiscount1 />
                      {roundedDiscount}%
                    </p>
                  </div>
                </div>

                <button
                  className=' flex justify-center items-center border border-gray-800 rounded p-4 w-30 h-10 mt-10'
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
