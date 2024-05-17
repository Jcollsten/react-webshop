import React from "react";
import { Link } from "react-router-dom";
import imageSrc from "../../Assets/heroImage.jpg";

function Home() {
  return (
    <div
      style={{
        backgroundImage: `url(${imageSrc})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
      }}
    >
      <div className="pt-24 text-center">
        <h1 className="text-4xl font-bold mb-4">Hello</h1>
        <p className="text-lg">Welcome to our website!</p>
        <Link to="/shop" className="hover:text-gray-300">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
            SHOP NOW
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
