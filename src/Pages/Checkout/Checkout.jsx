import React, { useContext, useState } from 'react';
import { ShopContext } from '../../context/ShopContext';

import OrderSummary from '../../Components/OrderSummary/OrderSummary';
import CustomerInformation from '../../Components/CustomerInformation/CustomerInformation';
import CheckoutHeader from '../../Components/CheckoutHeader/CheckoutHeader';
import CartItemContainer from '../../Components/CartItemContainer/CartItemContainer';
import EmptyCart from '../../Components/EmptyCart/EmptyCart';
import ReceiptModal from '../../Components/ReceiptModal/ReceiptModal';

export default function Checkout() {
  const { products, cartItems, setCustomerInfo, customerInfo } = useContext(ShopContext);

  // sort and filter on products that currently are in the cart based on ID - and move into variable "cartProducts"
  const cartProducts = products.filter((product) => cartItems[product.id] > 0);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const handlePlaceOrder = (customerData) => {
    setCustomerInfo(customerData);
    setIsModalOpen(true);
  };

  // const handleOnClose(){
  //   setIsModalOpen(false);
  //   " />
  // }

  return (
    <div className='bg-gray-100 pb-20'>
      <CheckoutHeader />
      {cartProducts.length === 0 ? (
        <EmptyCart />
      ) : (
        <div className='bg-gray-100 pb-20'>
          <CartItemContainer
            cartItems={cartItems}
            cartProducts={cartProducts}
          />
          <OrderSummary
            cartProducts={cartProducts}
            cartItems={cartItems}
          />
          <CustomerInformation onPlaceOrder={handlePlaceOrder} />
        </div>
      )}

      <ReceiptModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        cartProducts={cartProducts}
        customerInfo={customerInfo}
        cartItems={cartItems}
      />
    </div>
  );
}
