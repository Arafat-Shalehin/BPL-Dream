import React, { use } from 'react';
import userImg from "../../public/assets/download.png";

const AvailablePlayers = ({playersPromise}) => {

    const playerData = use(playersPromise);
    console.log(playerData);

    return (
        <>
        <div className='max-w-[1650px] w-full lg:mt-40 mx-auto
        grid md:grid-cols-3 grid-cols-1 gap-10 md:p-0 p-5'>
            {
                playerData.map(player => 
                    <div key={player.id} className="card bg-base-100 shadow-md p-5">

                        <figure>
                            <img
                            className='rounded-xl w-full max-h-[300px] object-cover' 
                            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                            alt="Shoes" />
                        </figure>

                        <div className="mt-5">

                            <div className='flex'>
                                <img className='w-10 rounded-xl' src={userImg} alt="User Pic" />
                                <h2 className="card-title text-2xl">{player.name}</h2>
                            </div>

                            <div className='flex justify-between items-center mt-3 mb-2'>

                                <div className='flex items-center'>
                                    <img className='w-10' src="/public/assets/download (1).png" alt="Flag Pic" />
                                    <h3 className='text-[#13131350] text-lg'>{player.country}</h3>
                                </div>
                                <button className='bg-[#cbc5c550] text-black rounded-xl px-9 py-1'>
                                    {player.role}
                                </button>

                            </div>

                            <hr className='border-gray-300'/>

                            <div className='flex justify-between items-center mb-2 mt-2'>
                                <h3 className='font-semibold text-lg'>Rating</h3>
                                <span className='text-[#13131350]'>{player.rating}</span>
                            </div>

                            <div className='flex justify-between mb-2'>
                                <p className='font-semibold text-lg'>Left-Hand-Bat</p>
                                <p className='font-medium text-md text-[#13131350]'>Right Hand bowl</p>
                            </div>

                            <div className='flex justify-between items-center'>
                                <p className='font-semibold text-lg'>Price: ${player.price}</p>
                                <button className="btn btn-primary rounded-xl bg-[#13131310] text-black shadow-none border-none">
                                    Choose Player
                                </button>
                            </div>
                            
                        </div>
                    </div>
                )
            }
        </div>
        </>
    );
};

export default AvailablePlayers;