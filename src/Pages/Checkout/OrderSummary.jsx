import React from "react";
import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";

export default function OrderSummary({ cartProducts, cartItems }) {
  // calls the calculateCartTotal (see context) and assigns that value to totalCost
  const { calculateCartTotal } = useContext(ShopContext);
  const totalCost = calculateCartTotal();

  return (
    <div className="flex justify-center mx-auto flex-col items-center flex-wrap gap-5 mt-7 p-4 shadow-md rounded w-[90%] sm:flex-col  sm:w-[80%] md:w-[70%] lg:w-[60%] bg-gray-200 border-l-4 border-gray-700 ">
      <div className="flex justify-center">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Order summary
        </h2>
      </div>

      <div className="w-[40vw] m-10 ">
        <div className="flex justify-between text-center underline">
          <div className="w-[33%] font-semibold">Product Name</div>
          <div className="w-[33%] font-semibold">Quantity</div>
          <div className="w-[33%] font-semibold">Price</div>
        </div>

        {cartProducts.map((product) => (
          <div
            key={product.id}
            className="flex justify-between text-center mt-2"
          >
            <div className="w-[33%]">{product.title}</div>
            <div className="w-[33%]">{cartItems[product.id]}</div>
            <div className="w-[33%] ">
              $
              {product.stock <= 50
                ? Math.floor(
                    product.price *
                      (1 - Math.ceil(product.discountPercentage) / 100)
                  ) * cartItems[product.id]
                : product.price * cartItems[product.id]}
            </div>
          </div>
        ))}
        <hr className="border-gray-900 mt-4"></hr>
      </div>
      <div className="flex justify-end w-[80%] font-bold">
        <div className="flex text-xl gap-4">
          <div>Total cost: </div>
          <div className="mb-5 ">$ {totalCost}</div>
        </div>
      </div>
    </div>
  );
}
