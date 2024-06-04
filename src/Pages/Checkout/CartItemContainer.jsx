import React from "react";
import CartItem from "../../Components/CartItem/cartItem";

// Container component for the cart Items, it iterates over each product from the fetch and creates a CartItem for each of them.
export default function CartItemContainer({ cartProducts, cartItems }) {
  return (
    <div className="flex justify-center items-center flex-col">
      {cartProducts.map((product) => (
        <CartItem
          key={product.id}
          product={product}
          quantity={cartItems[product.id]}
        />
      ))}
    </div>
  );
}
