import React, { useContext } from "react";
import "./ProductList.css";
import { ShopContext } from "../../context/ShopContext";
import { Link } from "react-router-dom";

function ProductList() {
  const { products, addToCart, cartItems } = useContext(ShopContext);

  return (
    <div className="flex bg-gray-100 justify-center items-center">
      <ul className="flex flex-wrap w-[70vw] justify-between">
        {products.map((product) => {
          const ItemsInCart = cartItems[product.id] || 0; // set it to 0 if no value is found
          return (
            <Link to={`/ProductPage/${product.id}`}>
              <div
                className="bg-gray-200 p-2 border-2 rounded m-2 mb-10 card"
                key={product.id}
              >
                <li>
                  <img
                    src={product.thumbnail}
                    alt="product"
                    className="w-[20vw] h-[15vw] border rounded"
                  />
                  <h2>{product.title}</h2>
                  <p>${product.price}</p>
                  <button
                    className=" flex justify-center items-center border border-gray-800 rounded p-4 w-30 h-10 mt-10"
                    onClick={() => addToCart(product.id)}
                  >
                    Add to Cart{ItemsInCart > 0 && ` (${ItemsInCart})`}
                  </button>
                </li>
              </div>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}

export default ProductList;
