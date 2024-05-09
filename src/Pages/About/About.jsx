import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";

function About() {
  return (
    <div>
      <Navbar />
      <div>
        <h2>ABOUT US</h2>
      </div>
      {/* <div>
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/faq">FAQ</Link>
      </div> */}
    </div>
  );
}

export default About;
