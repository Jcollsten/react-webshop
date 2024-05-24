import React from 'react';
import { Link } from 'react-router-dom';
import imageSrc from '../../Assets/heroImage.jpg';

function About() {
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
          <p className=' text-3xl font-semibold '>NJSC</p>
          <p className='mt-2 text-2xl font-semibold'>This store is part of my studies as a Fullstack-Developer.</p>
          <p className='mt-8 '>If this was a real store, this section would probably be about our values, comittments and our history. So let your imagination run wild...</p>
          <div className='flex flex-col items-center'>
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

export default About;
