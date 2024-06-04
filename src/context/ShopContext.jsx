import React, { createContext, useState, useEffect } from "react";

//Create context
export const ShopContext = createContext(null);

export const ShopContextProvider = (props) => {
  // cartItems holds the quantity of items by their product ID
  const [cartItems, setCartItems] = useState({});
  // LOCALSTORAGE SETUP
  // const [cartItems, setCartItems] = useState(() => {
  //   const savedCart = localStorage.getItem('cartItems');
  //   return savedCart ? JSON.parse(savedCart) : {};
  // });

  // Setting up state that holds the list of products from my fetch.
  const [products, setProducts] = useState([]);
  // State that holds customerinformation -> checkout and receipt
  const [customerInfo, setCustomerInfo] = useState(null);
  // State that manages the choosen product category in the productlist- this state is used to decide what category is fetched from dummy.
  const [category, setCategory] = useState("");
  // a filter to check what products are in the cart (cartItems[product.id] is the amount of that product)
  const cartProducts = products.filter((product) => cartItems[product.id] > 0); // cartProducts filters out what products that are in the cart from the productlist, cartItems[product.id] checks if quantity is over 0

  // useEffect that handles the fetch from dummyjson. Towards the end ive also included a filter in order to filter out a product that gave me a 404 for all of its images.
  useEffect(() => {
    const Url = category
      ? `https://dummyjson.com/products/category/${category}`
      : "https://dummyjson.com/products?limit=0";

    fetch(Url)
      .then((res) => res.json())
      .then((json) => {
        console.log("Fetched data:", json);
        const filteredProducts = json.products.filter(
          (product) => product.id !== 126
        );
        console.log("Removed product ID 126 since its not working properly");
        setProducts(filteredProducts);
      });
  }, [category]);

  // LOCALSTORAGE SETUP
  // useEffect(() => {
  //   localStorage.setItem('cartItems', JSON.stringify(cartItems));
  //   localStorage.setItem('cartProducts', JSON.stringify(cartProducts));
  // }, [cartItems, cartProducts]);

  // Adding product/quantity by creating a new abject based on previous item in stae and then adding 1 to the quantity of that product
  function addToCart(itemId) {
    setCartItems((prev) => ({ ...prev, [itemId]: (prev[itemId] || 0) + 1 }));
  }

  // About same logic as when adding, but remove 1pc instead if its in the cart, and its value is higher than 1.
  function removeFromCart(itemId) {
    setCartItems((prev) => {
      const updatedCart = { ...prev };
      if (updatedCart[itemId] > 0) {
        updatedCart[itemId] -= 1;
      }
      return updatedCart;
    });
  }
  // set the state back to 0 to remove that product from cart.
  function deleteFromCart(itemId) {
    setCartItems((prev) => {
      const updatedCart = { ...prev };
      if (updatedCart[itemId] > 0) {
        updatedCart[itemId] = 0;
      }
      return updatedCart;
    });
  }

  // Calculating the discount of products in cart.
  // This calc will iterate over the products and add the total price, and apply the discount to the productprice if stock is <=50.
  function calculateCartTotal() {
    const totalCost = cartProducts.reduce((sum, product) => {
      const totalPrice = product.price * cartItems[product.id];
      const discountedPrice =
        product.stock <= 50
          ? Math.floor(
              product.price * (1 - Math.ceil(product.discountPercentage) / 100)
            ) * cartItems[product.id]
          : totalPrice;
      return sum + discountedPrice;
    }, 0);
    // set initial 'sum' value to zero.
    return totalCost.toFixed(2); // return the total cost with 2 decimals
  }
  // reusable function for rounding the discount.
  function roundedDiscount(product) {
    return Math.ceil(product.discountPercentage);
  }
  // reusable functioncalculating the discount of a product
  function discountedPrice(product) {
    return product.stock <= 50
      ? Math.floor(product.price * (1 - roundedDiscount(product) / 100))
      : product.price;
  }

  // exporting the functions and values that i need in my components
  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    deleteFromCart,
    products,
    customerInfo,
    setCustomerInfo,
    setCategory,
    cartProducts,
    calculateCartTotal,
    discountedPrice,
    roundedDiscount,
  };

  console.log(cartItems);

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
