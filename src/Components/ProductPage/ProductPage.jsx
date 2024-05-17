import React, { useContext } from "react";
import { useParams } from "react-router-dom"; // Import useParams hook
import { ShopContext } from "../../context/ShopContext";

export default function ProductPage() {
  const { productId } = useParams(); // react hook that reads the URL so when url is productpage/2 it can extract the 2 and use as ID below in search.
  const { products } = useContext(ShopContext);

  // Searching for the product object at matches it to productId (pased to make sure its a number)
  const product = products.find(
    (product) => product.id === parseInt(productId)
  );

  if (!product) {
    // if no product is found
    return <div>Product not found</div>;
  }

  return (
    <div className="mx-auto w-[70%] h-screen flex flex-col items-center justify-center">
      <h2 className="text-5xl p-7">{product.title}</h2>
      <div className="flex">
        <div>
          <img
            src={product.images[0]}
            alt="product"
            className="w-auto h-auto p-7"
          />
        </div>
        <div className="p-7">
          <h2 className=" text-xl font-semibold">Product Information</h2>
          <p>{product.description}</p>
        </div>
      </div>
    </div>
  );
}
