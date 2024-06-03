import React, { createContext, useState, useEffect } from 'react';

export const ShopContext = createContext(null);

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  // LOCALSTORAGE SETUP
  // const [cartItems, setCartItems] = useState(() => {
  //   const savedCart = localStorage.getItem('cartItems');
  //   return savedCart ? JSON.parse(savedCart) : {};
  // });
  const [products, setProducts] = useState([]);
  const [customerInfo, setCustomerInfo] = useState(null);
  const [category, setCategory] = useState('');
  const cartProducts = products.filter((product) => cartItems[product.id] > 0); // Cart Products is the products in cart, cartItems[product.id] is the amount of that product

  useEffect(() => {
    const Url = category ? `https://dummyjson.com/products/category/${category}` : 'https://dummyjson.com/products?limit=0';

    fetch(Url)
      .then((res) => res.json())
      .then((json) => {
        console.log('Fetched data:', json);
        const filteredProducts = json.products.filter((product) => product.id !== 126);
        console.log('Removed product ID 126 since its not working properly');
        setProducts(filteredProducts);
      });
  }, [category]);

  // LOCALSTORAGE SETUP
  // useEffect(() => {
  //   localStorage.setItem('cartItems', JSON.stringify(cartItems));
  //   localStorage.setItem('cartProducts', JSON.stringify(cartProducts));
  // }, [cartItems, cartProducts]);

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

  function calculateCartTotal() {
    const totalCost = cartProducts.reduce((sum, product) => {
      const totalPrice = product.price * cartItems[product.id];
      const discountedPrice = product.stock <= 50 ? Math.floor(product.price * (1 - Math.ceil(product.discountPercentage) / 100)) * cartItems[product.id] : totalPrice;
      return sum + discountedPrice;
    }, 0);
    return totalCost.toFixed(2);
  }

  function roundedDiscount(product) {
    return Math.ceil(product.discountPercentage);
  }

  function discountedPrice(product) {
    return product.stock <= 50 ? Math.floor(product.price * (1 - roundedDiscount(product) / 100)) : product.price;
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
    calculateCartTotal,
    discountedPrice,
    roundedDiscount,
  };

  console.log(cartItems);

  return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>;
};
