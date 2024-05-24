import React, { useContext } from 'react';
import { useState } from 'react';
import { CiUser } from 'react-icons/ci';

export default function CustomerInformation({ onPlaceOrder }) {
  const [customerData, setCustomerData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    zip: '',
    city: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setCustomerData((data) => ({ ...data, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onPlaceOrder(customerData);

    console.log(customerData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='flex flex-col items-center bg-gray-200 mx-auto p-6 shadow-md rounded w-2/4 mt-20 border-l-4 border-gray-700 '
    >
      <h2 className='text-2xl font-semibold mb-4 text-center'>Customer information</h2>

      <div className='flex justify-center items-center flex-col w-[50vw]'>
        <input
          type='text'
          id='firstName'
          placeholder='First Name '
          className='form-input h-10 rounded-md p-2 mb-4 w-[50%]'
          onChange={handleChange}
        />

        <input
          type='text'
          id='lastName'
          placeholder='Last Name'
          className='form-input h-10 rounded-md p-2 mb-4 w-[50%]'
          onChange={handleChange}
        />

        <input
          type='email'
          id='email'
          placeholder='Email'
          className='form-input h-10 rounded-md p-2 mb-4 w-[50%]'
          onChange={handleChange}
        />
        <input
          type='phone'
          id='phone'
          placeholder='Phone'
          className='form-input h-10 rounded-md p-2 mb-4 w-[50%]'
          onChange={handleChange}
        />

        <input
          type='adress'
          id='homeAddress'
          placeholder='Adress'
          className='form-input h-10 rounded-md p-2 mb-4 w-[50%]'
          onChange={handleChange}
        />
      </div>
      <div className='flex justify-center items-center gap-2 w-[25vw] '>
        <input
          type='number'
          id='zip'
          placeholder='Postal/Zip'
          className=' form-input h-10 rounded-md p-2 mb-4 w-[50%]'
          onChange={handleChange}
        />

        <input
          type='text'
          id='city'
          placeholder='City'
          className=' form-input h-10 rounded-md p-2 mb-4 w-[50%]'
          onChange={handleChange}
        />
      </div>
      <div className='flex justify-center '>
        <button
          type='submit'
          className='border border-gray-800 rounded mt-10 py-4 px-7 hover:bg-green-700 active:scale-105 w-[100%]'
        >
          Place Order
        </button>
      </div>
    </form>
  );
}
