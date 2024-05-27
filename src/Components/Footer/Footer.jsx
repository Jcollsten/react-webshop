import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className='bg-gradient-to-b from-gray-800 via-gray-700 to-gray-600 text-white py-4'>
      <div className='container mx-auto flex justify-center space-x-6'>
        <Link
          to='/'
          className='hover:text-gray-300'
        >
          Home
        </Link>
        <Link
          to='/shop'
          className='hover:text-gray-300'
        >
          Shop
        </Link>
        <Link
          to='/about'
          className='hover:text-gray-300'
        >
          About
        </Link>
        <Link
          to='/faq'
          className='hover:text-gray-300'
        >
          FAQ
        </Link>
      </div>
      <p className='text-center mt-4'>© 2024 NJSC. All rights reserved.</p>
    </footer>
  );
}
