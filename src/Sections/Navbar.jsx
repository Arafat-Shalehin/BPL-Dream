import React from 'react';

const Navbar = ({availableBalance}) => {
    return (
        <>
        <div className='my-5 lg:mx-20 sm:mx-5 flex justify-between'>
            <img src="/public/assets/logo.png" alt="Logo Pic" />
            <div className='flex items-center'>
                <ul className='text-[#a9a0a0] space-x-7'>
                    <a href="/">Home</a>
                    <a href="/">Fixture</a>
                    <a href="/">Team</a>
                    <a href="/">Schedules</a>
                </ul>
                <button className='ml-7 px-5 py-2 font-semibold rounded-xl shadow'>
                    {availableBalance} Coin
                </button>
            </div>
        </div>
        </>
    );
};

export default Navbar;