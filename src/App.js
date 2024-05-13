import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Shop from './Pages/Shop/Shop';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Faq from './Pages/Faq/Faq';
import Checkout from './Pages/Checkout/Checkout';
import Footer from './Components/Footer/Footer';
import { ShopContextProvider } from './context/ShopContext';

const App = () => {
  return (
    <ShopContextProvider>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route
              path='/'
              element={<Home />}
            />
            <Route
              path='/Shop'
              element={<Shop />}
            />
            <Route
              path='/About'
              element={<About />}
            />
            <Route
              path='/Faq'
              element={<Faq />}
            />
            <Route
              path='/Checkout'
              element={<Checkout />}
            />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ShopContextProvider>
  );
};

export default App;
