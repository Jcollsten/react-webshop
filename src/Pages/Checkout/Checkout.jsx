import React, { useContext, useState } from "react";
import { ShopContext } from "../../context/ShopContext";
import imageSrc2 from "../../Assets/heidi-fin-2TLREZi7BUg-unsplash.jpg";
import OrderSummary from "./OrderSummary";
import CustomerInformation from "./CustomerInformation";
import CheckoutHeader from "./CheckoutHeader";
import CartItemContainer from "./CartItemContainer";
import EmptyCart from "./EmptyCart";
import ReceiptModal from "./ReceiptModal";

export default function Checkout() {
  // Import what i need from the ShopContext.
  const { cartItems, setCustomerInfo, customerInfo, cartProducts } =
    useContext(ShopContext);

  // setup a state to handle the receipt modal.
  const [isModalOpen, setIsModalOpen] = useState(false);
  // function that calls one function and updates the modal state to true when clicked.
  const handlePlaceOrder = (customerData) => {
    setCustomerInfo(customerData);
    setIsModalOpen(true);
  };

  return (
    // below renders the checkout components and send the needed props to each component. This side is what makes the checkout and the receipt modal.
    <div
      style={{
        backgroundImage: `url(${imageSrc2})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "",
        overflow: "hidden",
      }}
    >
      <div className="pb-20 bg-opacity-90 bg-white w-[80%] mx-auto  ">
        <CheckoutHeader />
        {cartProducts.length === 0 ? (
          <EmptyCart />
        ) : (
          <div className="pb-20 ">
            <CartItemContainer
              cartItems={cartItems} // quantity
              cartProducts={cartProducts} // details of each product in cart
            />
            <OrderSummary cartProducts={cartProducts} cartItems={cartItems} />
            <CustomerInformation onPlaceOrder={handlePlaceOrder} />
          </div>
        )}

        <ReceiptModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          cartProducts={cartProducts}
          customerInfo={customerInfo} // information customer enters into the checkout form
          cartItems={cartItems}
        />
      </div>
    </div>
  );
}
