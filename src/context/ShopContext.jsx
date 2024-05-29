import React, { createContext, useState, useEffect } from 'react';

export const ShopContext = createContext(null);

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const [products, setProducts] = useState([]);
  const [customerInfo, setCustomerInfo] = useState(null);
  const [category, setCategory] = useState('');
  const cartProducts = products.filter((product) => cartItems[product.id] > 0);

  // 'https://dummyjson.com/products'
  // https://dummyjson.com/products/category/smartphones'

  // const ItemsInCart = [];
  useEffect(() => {
    const Url = category ? `https://dummyjson.com/products/category/${category}` : 'https://dummyjson.com/products?limit=0';

    fetch(Url)
      .then((res) => res.json())
      .then((json) => {
        console.log('Fetched data:', json);
        setProducts(json.products);
      });
  }, [category]);

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
    setCategory,
    cartProducts,
  };

  console.log(cartItems);

  return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>;
};