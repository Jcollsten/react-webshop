import React, { useContext, useState } from 'react';
import { ShopContext } from '../../context/ShopContext';
import imageSrc2 from '../../Assets/heidi-fin-2TLREZi7BUg-unsplash.jpg';
import OrderSummary from './OrderSummary';
import CustomerInformation from './CustomerInformation';
import CheckoutHeader from './CheckoutHeader';
import CartItemContainer from './CartItemContainer';
import EmptyCart from './EmptyCart';
import ReceiptModal from './ReceiptModal';

export default function Checkout() {
  const { cartItems, setCustomerInfo, customerInfo, cartProducts } = useContext(ShopContext);

  // sort and filter on products that currently are in the cart based on ID - and move into variable "cartProducts"

  const [isModalOpen, setIsModalOpen] = useState(false);
  const handlePlaceOrder = (customerData) => {
    setCustomerInfo(customerData);
    setIsModalOpen(true);
  };
  // move to context?

  return (
    <div
      style={{
        backgroundImage: `url(${imageSrc2})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '',
        overflow: 'hidden',
      }}
    >
      <div className='pb-20 bg-opacity-90 bg-white w-[80%] mx-auto  '>
        <CheckoutHeader />
        {cartProducts.length === 0 ? (
          <EmptyCart />
        ) : (
          <div className='pb-20 '>
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
    </div>
  );
}
