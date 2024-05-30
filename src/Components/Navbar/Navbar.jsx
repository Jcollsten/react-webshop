import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { IoBagOutline } from "react-icons/io5";

import { CiMenuBurger } from "react-icons/ci";
import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { calculateCartTotal } = useContext(ShopContext);
  const totalCost = calculateCartTotal();

  return (
    <div className="sticky top-0 z-10 py-4 text-white bg-gray-800">
      <nav className="flex items-center justify-between px-8 py-4 mx-auto max-w-7xl">
        <div>
          <Link to="/">
            <p className="text-2xl font-bold">NJSC</p>
          </Link>
        </div>
        <div className="hidden text-2xl md:flex">
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
          </ul>
        </div>
        <div className="hidden border border-gray-400 rounded-lg md:block">
          <Link to="/checkout">
            <p className="px-1 py-1 text-xl text-white rounded hover:text-gray-300">
              Checkout {totalCost !== "0.00" ? `$${totalCost}` : ""}
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
        <div className="px-8 pb-4 bg-gray-800 md:hidden">
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
              <Link to="/Checkout">Checkout</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
