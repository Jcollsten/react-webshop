import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import { Link } from "react-router-dom";

import { CiStar, CiDiscount1 } from "react-icons/ci";

function ProductList() {
  const { products, addToCart, cartItems } = useContext(ShopContext);

  return (
    <div className="flex bg-gray-100 justify-center items-center">
      <ul className="flex flex-wrap w-[90vw] md:w-[70vw] justify-between">
        {products.map((product) => {
          const ItemsInCart = cartItems[product.id] || 0; // set it to 0 if no value is found
          const roundedDiscount = Math.ceil(product.discountPercentage);
          const discountedPrice =
            product.stock <= 50
              ? Math.floor(product.price * (1 - roundedDiscount / 100))
              : product.price;
          const discountApplied = product.stock <= 50;
          return (
            <div
              className="bg-white p-4 border-2 rounded-md m-2 flex flex-col h-auto relative w-full sm:w-[47%] md:w-[47%] lg:w-[23%] justify-between  "
              key={product.id}
            >
              <li className="flex flex-col h-full">
                <Link to={`/ProductPage/${product.id}`} className="flex-grow">
                  <img
                    src={product.images[0]}
                    alt="product"
                    className="w-full object-contain h-48 rounded mb-4"
                  />
                  <h2 className="mt-2 text-lg font-bold">{product.title}</h2>
                </Link>
                <div className="flex gap-4 mt-2 text-l p-2 ' ">
                  <div className="flex items-center justify-between">
                    <p className="font-semibold ">${discountedPrice}</p>
                  </div>
                  {product.stock <= 50 && (
                    <div>
                      <p className="line-through text-red-600 ">
                        ${product.price}
                      </p>
                    </div>
                  )}
                </div>
                {discountApplied && (
                  <div>
                    <p className="absolute top-2 right-2 text-xl font-semibold text-red-600 flex items-center">
                      <CiDiscount1 />
                      {roundedDiscount}%
                    </p>
                  </div>
                )}
                <div>
                  <p className="absolute top-2 left-2 text-l flex items-center gap-2 p-2">
                    <CiStar />
                    {product.rating}
                  </p>
                </div>
                {/* <div>
                    <p className='flex items-center gap-2'>{product.stock}</p>
                  </div> */}

                <button
                  className="border border-gray-800 rounded p-2 w-full mt-auto"
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
