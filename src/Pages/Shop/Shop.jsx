import React from 'react';
import { Link } from 'react-router-dom';
import ProductList from '../../Components/ProductList/ProductList';
import Navbar from '../../Components/Navbar/Navbar';
import CategoryFilter from '../../Components/CategoryFilter/CategoryFilter';

function Shop() {
  return (
    <div className='bg-gray-100 pb-20'>
      <div>
        <h2>SHOP</h2>
        <div className='flex justify-center ]'>
          <CategoryFilter />
        </div>

        <ProductList />
      </div>
    </div>
  );
}

export default Shop;
