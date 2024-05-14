import React, { useContext } from 'react';
import './ProductList.css';
import { ShopContext } from '../../context/ShopContext';

function ProductList() {
  const { products, addToCart, cartItems } = useContext(ShopContext);

  return (
    <div className='flex bg-slate-600 justify-center items-center'>
      <ul className='flex flex-wrap w-[70vw] justify-between'>
        {products.map((product) => {
          const ItemsInCart = cartItems[product.id] || 0; // Default to 0 if item not found in cart
          return (
            <div
              className='bg-gray-200 p-4 border-2 rounded m-7 card'
              key={product.id}
            >
              <li>
                <img
                  src={product.thumbnail}
                  alt='product'
                  className='w-[20vw] h-[15vw]'
                />
                <h2>{product.title}</h2>
                <p>${product.price}</p>
                <button onClick={() => addToCart(product.id)}>Add to Cart{ItemsInCart > 0 && ` (${ItemsInCart})`}</button>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default ProductList;
