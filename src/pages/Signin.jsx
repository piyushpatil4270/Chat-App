import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div className='w-full h-screen flex items-center justify-center bg-slate-300'>
      <div className='w-full xs:w-[90%] sm:w-[70%] md:w-[50%] lg:w-[35%] h-fit xs:p-4 sm:p-2 flex flex-col gap-3 bg-white rounded-md'>
        <div className='w-full flex p-2 justify-start items-center'>
          <span className='text-[16px] font-semibold'>Sign In</span>
        </div>
        
        <div className='w-full flex p-2 items-center'>
          <span className='w-[30%] sm:w-[20%] text-[12px] sm:text-[14px]'>Email</span>
          <input
            className='flex-1 bg-slate-100 mx-2 outline-none border-0 border-b border-b-[#1a1919]'
            type='email'
          />
        </div>
        
        <div className='w-full flex p-2 items-center'>
          <span className='w-[30%] sm:w-[20%] text-[12px] sm:text-[14px]'>Password</span>
          <input
            className='flex-1 bg-slate-100 mx-2 outline-none border-0 border-b border-b-[#1a1919]'
            type='password'
          />
        </div>
        <div className='w-full flex p-2 gap-4 justify-center items-center'>
          <button className='bg-green-500 text-white text-[15px] px-3 py-1 rounded-sm'>
            Sign Up
          </button>
          <Link to={"/"} className='text-[14px] border-0 border-b border-b-blue-700'>Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
