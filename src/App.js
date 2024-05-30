import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Shop from "./Pages/Shop/Shop";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Checkout from "./Pages/Checkout/Checkout";
import Footer from "./Components/Footer/Footer";
import { ShopContextProvider } from "./context/ShopContext";
import ProductPage from "./Pages/Shop/ProductPage";

const App = () => {
  return (
    <ShopContextProvider>
      <Router>
        <div className="flex flex-col min-h-screen bg-gray-200">
          <Navbar />
          <div className="flex-grow overflow-hidden">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Shop" element={<Shop />} />
              <Route path="/About" element={<About />} />
              <Route path="/Checkout" element={<Checkout />} />
              <Route path="/ProductPage/:productId" element={<ProductPage />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </ShopContextProvider>
  );
};

export default App;
