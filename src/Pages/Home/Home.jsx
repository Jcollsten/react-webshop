import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { Link } from "react-router-dom";
import imageSrc from "../../Assets/heroImage.jpg";
function Home() {
  return (
    <div className="relative">
      <Navbar />
      <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="text-4xl font-bold mb-4">Hello</h1>
        <p className="text-lg">Welcome to our website!</p>

        <Link to="/shop" className="hover:text-gray-300">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
            SHOP NOW
          </button>
        </Link>
      </div>
      <img src={imageSrc} alt="HeroImg" className="block mx-auto" />
      {/* <div>
      <Link to="faq">Faq</Link>
      <Link to="/about">About</Link>
      <Link to="/shop">FAQ</Link>
    </div> */}
    </div>
  );
}

export default Home;
