import React from 'react';
import { Link } from 'react-router-dom';
import ProductList from '../../Components/ProductList/ProductList';
import Navbar from '../../Components/Navbar/Navbar';

function Shop() {
  return (
    <div className='bg-gray-100 pb-20'>
      <div>
        <h2>SHOP</h2>
        <ProductList />
      </div>
    </div>
  );
}

export default Shop;
