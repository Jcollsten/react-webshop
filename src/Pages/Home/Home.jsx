import React from 'react';
import { Link } from 'react-router-dom';
import imageSrc from '../../Assets/heroImage.jpg';

function Home() {
  return (
    <div
      style={{
        backgroundImage: `url(${imageSrc})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
      }}
    >
      <div className='pt-60 text-center '>
        <div className=' w-[30%] mx-auto shadow-2xl rounded-md bg-white bg-opacity-60 backdrop-filter backdrop-blur-md p-20'>
          <p className=' text-2xl font-semibold'>Lorem ipsum dolor sit, amet consectetur!</p>
          <p className='mt-2 text-2xl font-semibold'>Sign up for our newsletter!</p>
          <div className='flex flex-col items-center'>
            <input
              className='mt-8 p-2 rounded-md w-[60%] text-center text-xl border-md shadow-2xl'
              type='email'
              placeholder='mail@example.com'
            />
            <button className='bg-green-500 hover:bg-green-700 text-white font-bold rounded mt-4 p-3 w-[20%]'>Sign up!</button>

            <p className='text-xs p-2'>*This form is a prop</p>
            <Link
              to='/shop'
              className=' bg-gray-400 hover:bg-white hover:text-black text-white font-bold rounded mt-10 p-3 w-[30%]'
            >
              <button>SHOP NOW </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
