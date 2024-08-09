import React from 'react'

const Signup = () => {
  return (
    <div className='w-full h-dvh flex items-center justify-center bg-slate-300'>
       
        
      <div className='xs:w-[50%] sm:w-[35%] h-fit xs:p-4 sm:p-2 flex flex-col gap-3 bg-white rounded-md'>
      <div className='w-full flex p-2 justify-start gap-2 items-center'>
      <span className='w-[15%] text-[16px] font-semibold'>SignUp</span>
     
        </div>
        <div className='w-full flex p-2 justify-start gap-2 items-center'>
      <span className='w-[15%] text-[14px]'>Name</span>
      <input className='flex-1 bg-slate-100 outline-none border-0 border-b border-b-[#1a1919] mx-[25px]'  />
        </div>
        <div className='w-full flex p-2 justify-start  gap-2 items-center'>
        <span className='w-[15%] text-[14px]'>Email</span>
        <input className='flex-1 bg-slate-100 mx-[25px] outline-none border-0 border-b border-b-[#1a1919]' />
        </div>
        <div className='w-full flex p-2 justify-start  gap-2 items-center'>
        <span className='w-[15%] text-[14px]'>Phone No.</span>
        <input className='flex-1 bg-slate-100 mx-[25px] outline-none border-0 border-b border-b-[#1a1919]' />
        </div>
        <div className='w-full flex p-2 justify-start  gap-2 items-center'>
        <span className='w-[15%] text-[14px]'>Password</span>
        <input className='flex-1 bg-slate-100 mx-[25px] outline-none border-0 border-b border-b-[#1a1919]' />
        </div>
        <div className='w-full flex p-2 justify-center  gap-2 items-center'>
        <button className='bg-green-500 rounded-sm text-white text-[15px] px-1'>Sign-Up</button>
         </div>
      </div>
    </div>
  )
}

export default Signup
