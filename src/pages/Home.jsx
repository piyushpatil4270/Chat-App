import React from 'react';

const Home = () => {
    const chats = [
        { user: "Sourabh", msg: "Hello" },
        { user: "Aditya", msg: "Hello" },
        { user: "Vansh", msg: "Hey guys" },
        { user: "Shikha", msg: "Hii" },
        { user: "Kaashvi", msg: "Welcome back friends" }
    ];

    return (
        <div className='w-full h-full flex flex-col justify-start p-4'>
            <div className='w-full flex flex-col items-center mb-4'>
                <span className='text-xl font-semibold'>Group Chat 1</span>
            </div>
            <div className='flex flex-col justify-center gap-2 items-center w-full'>
                {chats.map((chat, index) => {
                    return (
                        <div key={index} className='flex px-2 w-full bg-white rounded-sm h-fit py-1 text-base'>
                            <span className='font-medium mr-2'>{chat.user}:</span>
                            <span>{chat.msg}</span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Home;
