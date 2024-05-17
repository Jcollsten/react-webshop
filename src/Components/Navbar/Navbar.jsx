import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-gray-800 text-white py-4 sticky top-0 ">
      <nav className="flex justify-between items-center max-w-7xl mx-auto py-4 px-8">
        <div>
          <p className="text-xl font-bold">NJSC</p>
        </div>
        <div className="flex">
          <ul className="flex space-x-4">
            <li className="hover:text-gray-300">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-gray-300">
              <Link to="/Shop">Shop</Link>
            </li>
            <li className="hover:text-gray-300">
              <Link to="/About">About</Link>
            </li>
            <li className="hover:text-gray-300">
              <Link to="/Faq">FAQ</Link>
            </li>
          </ul>
        </div>
        <div>
          <Link to="/checkout">
            <p className="text-white  py-2 px-4 rounded hover:text-gray-300">
              Checkout
            </p>
            <p className="inline">🛒</p>
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
