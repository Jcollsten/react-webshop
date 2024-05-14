import React, { createContext, useState, useEffect } from 'react';

export const ShopContext = createContext(null);

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const [products, setProducts] = useState([]);
  // const ItemsInCart = [];
  useEffect(() => {
    fetch('https://dummyjson.com/products?limit=10&skip=0')
      .then((res) => res.json())
      .then((json) => {
        console.log('Fetched data:', json);
        setProducts(json.products);
      });
  }, []);

  // Related to LocalStorage, perhaps useful later?
  // function getSavedCartItems() {
  //   const savedCartItems = localStorage.getItem('cartItems');
  //   return savedCartItems ? JSON.parse(savedCartItems) : {};
  // }

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
    // getSavedCartItems, (export of the localStorage data, perhaps useful later?)
    products, // Include products in the context value
  };

  console.log(cartItems);

  return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>;
};
