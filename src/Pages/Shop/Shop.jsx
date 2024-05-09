import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../../Components/ProductList/ProductList";
import Navbar from "../../Components/Navbar/Navbar";

function Shop() {
  return (
    <div>
      <Navbar />
      <div>
        <h2>SHOP</h2>
        <ProductCard />
      </div>
      {/* <div>
        <Link to="/">Home</Link>
        <Link to="/About">About</Link> 
        <Link to="/Faq">FAQ</Link> 
      </div> */}
    </div>
  );
}

export default Shop;
