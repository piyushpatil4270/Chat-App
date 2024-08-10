import React, { useState } from 'react';
import axios from "axios"
import { Link } from 'react-router-dom';
const Signup = () => {
  const [username,setUsername]=useState("")
  const [phone,setPhone]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const handleSignup=async()=>{
    try {
      if(username.trim()===""||phone.trim()===""||email.trim()===""||password.trim()===""){
        alert("All fields should be valid")
        return
      }
      const res=await axios.post("http://localhost:5500/auth/signup",{username:username,email:email,phone:phone,password:password})
      if(res.status===202 || res.status===200){
        alert(res.data)
        return
      }
    
    } catch (error) {
      console.log(error)
      
    }
  }
  return (
    <div className='w-full h-screen flex items-center justify-center bg-slate-300'>
      <div className='w-full xs:w-[90%] sm:w-[70%] md:w-[50%] lg:w-[35%] h-fit xs:p-4 sm:p-2 flex flex-col gap-3 bg-white rounded-md'>
        <div className='w-full flex p-2 justify-start items-center'>
          <span className='text-[16px] font-semibold'>Sign Up</span>
        </div>
        <div className='w-full flex p-2 items-center'>
          <span className='w-[30%] sm:w-[20%] text-[12px] sm:text-[14px]'>Name</span>
          <input
            className='flex-1 bg-slate-100 mx-2 outline-none border-0 border-b border-b-[#1a1919]'
            type='text'
            onChange={(e)=>{setUsername(e.target.value)}}
          />
        </div>
        <div className='w-full flex p-2 items-center'>
          <span className='w-[30%] sm:w-[20%] text-[12px] sm:text-[14px]'>Email</span>
          <input
            className='flex-1 bg-slate-100 mx-2 outline-none border-0 border-b border-b-[#1a1919]'
            type='email'
            onChange={(e)=>{setEmail(e.target.value)}}
          />
        </div>
        <div className='w-full flex p-2 items-center'>
          <span className='w-[30%] sm:w-[20%] text-[12px] sm:text-[14px]'>Phone No.</span>
          <input
            className='flex-1 bg-slate-100 mx-2 outline-none border-0 border-b border-b-[#1a1919]'
            type='text'
            onChange={(e)=>{setPhone(e.target.value)}}
          />
        </div>
        <div className='w-full flex p-2 items-center'>
          <span className='w-[30%] sm:w-[20%] text-[12px] sm:text-[14px]'>Password</span>
          <input
            className='flex-1 bg-slate-100 mx-2 outline-none border-0 border-b border-b-[#1a1919]'
            type='password'
            onChange={(e)=>{setPassword(e.target.value)}}
          />
        </div>
        <div className='w-full flex p-2 gap-4 justify-center items-center'>
          <button className='bg-green-500 text-white text-[15px] px-3 py-1 rounded-sm'  onClick={handleSignup}>
            Sign Up
          </button>
          <Link to={"/signin"} className='text-[14px] border-0 border-b border-b-blue-700'>Log In</Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
