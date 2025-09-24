import React, { Suspense, useState } from 'react'
import Navbar from './Sections/Navbar'
import Hero from './Sections/Hero';
import AvailablePlayers from './Sections/AvailablePlayers';
import SelectedPlayers from './Sections/SelectedPlayers';

const fetchPlayers = async () => {

  const res = await fetch("/players.json")
  return res.json();

}

const App = () => {

  const [toggle, setToggle] = useState(true);

  const playersPromise = fetchPlayers();

  return (
    <>
      <Navbar/>
      <Hero/>

      <div className='max-w-[1650px] p-2 xl:mt-30 mx-auto flex justify-between items-center'>
        <h1 className='font-bold text-3xl'>Available Players</h1>

        <div>
          <button 
          onClick={() => setToggle(true)} 
          className={`border-1 border-r-0 border-gray-400 font-semibold ${toggle ? "bg-[#E7FE29]": "text-[#13131350]"}
          text-lg px-4 py-2 rounded-l-2xl`}>
            Available
          </button>

          <button 
          onClick={() => setToggle(false)} 
          className={`border-1 border-l-0 border-gray-400 font-semibold text-lg 
          px-4 py-2 rounded-r-2xl ${toggle === false ? "bg-[#E7FE29]": "text-[#13131350]"}`}>
            Selected<span>(0)</span>
          </button>
        </div>
      </div>

      {
        toggle === true ?
         <Suspense fallback={"Loading...."}>
            <AvailablePlayers playersPromise={playersPromise}/>
          </Suspense>
          : <SelectedPlayers/>

      }
    
    </>
  )
}

export default App;