import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Home = () => {
    const [msg,setMsg]=useState("")
   const [chats,setChats]=useState([])
   const getMessages=async()=>{
    try {
        const res=await axios.get("http://localhost:5500/message/all")
        setChats(res.data)
    } catch (error) {
        console.log(error)
    }
   }
 const sendMessage=async()=>{
    try {
        if(msg.trim()===""){
            alert("Please enter a valid message")
            return
        }
        const userToken=localStorage.getItem("Ctoken")
        const res=await axios.post("http://localhost:5500/message/add",{message:msg},{headers:{"Authorization":userToken}})
        alert(res.data)
        setMsg("")
    } catch (error) {
        console.log(error)
        alert(error)
    }
 }

 useEffect(()=>{
getMessages()
 },[])
    return (
        <div className='w-full h-full flex flex-col justify-start p-4'>
            <div className='w-full flex flex-col items-center mb-4'>
                <span className='text-xl font-semibold'>Group Chat 1</span>
            </div>
            <div className='flex flex-col justify-center gap-2 items-center w-full'>
                {chats.map((chat, index) => {
                    return (
                        <div key={index} className='flex px-2 w-full bg-white rounded-sm h-fit py-1 text-base'>
                            <span className='font-medium mr-2'>{chat.name}:</span>
                            <span>{chat.message}</span>
                        </div>
                    );
                })}
                <div  className='flex px-2 w-full bg-white rounded-sm h-fit py-1 text-base gap-2'>
                            <span className='font-medium mr-2'>You:</span>
                            <input className='outline-none border-0 border-b-2 border-b-black' onChange={(e)=>setMsg(e.target.value)} value={msg} />
                            <button className='text-[12px] px-2 bg-green-400 rounded-sm' onClick={sendMessage}>Send</button>
                        </div>
            </div>
        </div>
    );
}

export default Home;
