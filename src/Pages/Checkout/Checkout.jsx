import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";

import OrderSummary from "../../Components/OrderSummary/OrderSummary";
import CustomerInformation from "../../Components/CustomerInformation/CustomerInformation";
import CheckoutHeader from "../../Components/CheckoutHeader/CheckoutHeader";
import CartItemContainer from "../../Components/CartItemContainer/CartItemContainer";
import EmptyCart from "../../Components/EmptyCart/EmptyCart";

export default function Checkout() {
  const { products, cartItems } = useContext(ShopContext);

  // sort and filter on products that currently are in the cart based on ID - and insert into variable "cartproducts"
  const cartProducts = products.filter((product) => cartItems[product.id] > 0);

  return (
    <div className="bg-gray-100 pb-20">
      <CheckoutHeader />
      {cartProducts.length === 0 ? (
        <EmptyCart />
      ) : (
        <div className="bg-gray-100 pb-20">
          <CartItemContainer
            cartItems={cartItems}
            cartProducts={cartProducts}
          />
          <OrderSummary cartProducts={cartProducts} cartItems={cartItems} />
          <CustomerInformation />
        </div>
      )}
    </div>
  );
}
