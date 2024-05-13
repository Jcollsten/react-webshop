import React, { createContext, useState } from 'react';

export const ShopContext = createContext(null);

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});

  function getSavedCartItems() {
    const savedCartItems = localStorage.getItem('cartItems');
    return savedCartItems ? JSON.parse(savedCartItems) : {};
  }

  function addToCart(itemId) {
    setCartItems((prev) => ({ ...prev, [itemId]: (prev[itemId] || 0) + 1 }));
  }

  function removeFromCart(itemId) {
    setCartItems((prev) => {
      const updatedCart = { ...prev };
      if (updatedCart[itemId] > 0) {
        updatedCart[itemId] -= 1;
      }
      return updatedCart;
    });
  }

  const contextValue = { cartItems, addToCart, removeFromCart, getSavedCartItems };
  console.log(cartItems);

  return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>;
};
