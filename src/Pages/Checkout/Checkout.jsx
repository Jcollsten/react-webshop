import React, { useEffect, useContext } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../context/ShopContext';

export default function Checkout({ products, cartItems }) {
  return (
    <div className='bg-gray-100'>
      <div className='bg-white'>
        <h1>CART ITEMS</h1>
      </div>
      <div className='max-w-md mx-auto p-6 rounded-lg '>
        <h2 className='text-2xl font-semibold mb-4'>Checkout</h2>
        <div className='mb-4'>
          <label
            className='block text-gray-900 font-semibold mb-2'
            htmlFor='firstName'
          >
            First Name
          </label>
          <input
            type='text'
            id='firstName'
            className='form-input w-full rounded-md'
          />
          <label
            className='block text-gray-900 font-semibold mb-2'
            htmlFor='firstName'
          >
            Last Name
          </label>
          <input
            type='text'
            id='firstName'
            className='form-input w-full rounded-md'
          />
          <label
            className='block text-gray-900 font-semibold mb-2'
            htmlFor='firstName'
          >
            Email
          </label>
          <input
            type='text'
            id='firstName'
            className='form-input w-full rounded-md'
          />
          <label
            className='block text-gray-900 font-semibold mb-2'
            htmlFor='firstName'
          >
            Home Adress
          </label>
          <input
            type='text'
            id='firstName'
            className='form-input w-full rounded-md'
          />
        </div>
      </div>
    </div>
  );
}
