import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-gray-800 text-white text-2xl py-4 sticky top-0 z-10">
      <nav className="flex justify-between items-center max-w-7xl mx-auto py-4 px-8">
        <div>
          <Link to="/">
            <p className="text-2xl font-bold">NJSC</p>
          </Link>
        </div>
        <div className="hidden md:flex">
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
        <div className="hidden md:block">
          <Link to="/checkout">
            <p className="text-white  py-2 px-4 rounded hover:text-gray-300">
              Checkout
            </p>
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="">
            <CiMenuBurger />
          </button>
        </div>
      </nav>
      {isOpen && (
        <div className="md:hidden bg-gray-800 px-8 pb-4">
          <ul className="flex flex-col space-y-2">
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
            <li className="hover:text-gray-300">
              <Link to="/Checkout">Checkout</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
