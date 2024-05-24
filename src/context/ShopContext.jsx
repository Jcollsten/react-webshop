import React, { createContext, useState, useEffect } from 'react';

export const ShopContext = createContext(null);

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const [products, setProducts] = useState([]);
  const [customerInfo, setCustomerInfo] = useState(null);
  // const ItemsInCart = [];
  useEffect(() => {
    fetch('https://dummyjson.com/products?limit=0&skip=0')
      .then((res) => res.json())
      .then((json) => {
        console.log('Fetched data:', json);
        setProducts(json.products);
      });
  }, []);

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

  function deleteFromCart(itemId) {
    setCartItems((prev) => {
      const updatedCart = { ...prev };
      if (updatedCart[itemId] > 0) {
        updatedCart[itemId] = 0;
      }
      return updatedCart;
    });
  }

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    deleteFromCart,
    products, // Include products in the context value
    customerInfo,
    setCustomerInfo,
  };

  console.log(cartItems);

  return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>;
};
