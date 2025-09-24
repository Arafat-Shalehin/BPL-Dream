import React from 'react';

const Hero = () => {
    return (
        <>
        <div className='max-w-[1650px] mx-auto xl:block hidden'>

            <img className='bg-black rounded-xl w-screen max-h-[500px]' src="/assets/bg-shadow.png" alt="BG Pic" />
           
            <div className='text-center sm:-mt-110 space-y-5'>

                <img className='mx-auto' src="/assets/banner-main.png" alt="Banner Pic" />

                <h1 className='text-white text-4xl font-bold'>Assemble Your Ultimate Dream 11 Cricket Team</h1>

                <h3 className='text-[#FFFFFF70] text-2xl font-medium'>Beyond Boundaries Beyond Limits</h3>

                <div className='border-2 border-[#E7FE29] rounded-3xl w-fit mx-auto'>
                    <button className='bg-[#E7FE29] m-2 rounded-2xl text-black font-semibold px-6 py-3'>
                     Claim Free Credit
                    </button>
                </div>
              
            </div>
            
        </div>
        </>
    );
};

export default Hero;