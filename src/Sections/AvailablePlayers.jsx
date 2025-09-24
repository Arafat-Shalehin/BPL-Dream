import React, { use } from 'react';
import PlayersCard from './PlayersCard';

const AvailablePlayers = ({playersPromise, setAvailableBalance, availableBalance}) => {

    const playerData = use(playersPromise);
    console.log(playerData);

    return (
        <>
        <div className='max-w-[1650px] w-full lg:mt-10 xl:mt-10 mt-5 mx-auto
        grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 p-5'>
            {
                playerData.map(player => 
                    <PlayersCard key={player.id} 
                    availableBalance={availableBalance} 
                    setAvailableBalance={setAvailableBalance} 
                    player={player}>
                    </PlayersCard>
                )
            }
        </div>
        </>
    );
};

export default AvailablePlayers;