import React from "react";
import CartItem from "../../Components/CartItem/cartItem";

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
