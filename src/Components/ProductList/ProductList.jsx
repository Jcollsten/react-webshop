import React, { useState, useEffect } from "react";
import "./ProductList.css";

function ProductCard() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=10&skip=0")
      .then((res) => res.json())
      .then((json) => {
        console.log("Fetched data:", json); // Log the fetched data
        setProducts(json.products); // Set only the products array in state
      });
    // .catch((error) => console.error("Error fetching data:", error));
  }, []); // tom vektor stoppar useEffkten från att köras flera gånger

  return (
    <div className=" flex bg-slate-600  justify-center items-center">
      <ul className="flex flex-wrap w-[70vw] justify-between ">
        {products.map((product, index) => (
          <div className="bg-gray-200 p-4 border-2 rounded m-7 card">
            <li key={index}>
              <img
                src={product.thumbnail}
                alt="product"
                className="w-[20vw] h-[15vw] "
              />
              <h2>{product.title}</h2>
              {/* <h4>{product.description}</h4> */}
              <p>${product.price}</p>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default ProductCard;
