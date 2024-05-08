import React, { useState, useEffect } from 'react';
import { fetchProducts } from './Utils/Api';
import ProductCard from './Components/ProductList/ProductList';

const App = () => {
  return (
    <div className='content-center items-center flex'>
      <h1>Product List</h1>
      <ProductCard />
    </div>
  );
};

export default App;
