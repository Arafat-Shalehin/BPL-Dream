import React, { Suspense } from 'react'
import Navbar from './Sections/Navbar'
import Hero from './Sections/Hero';
import AvailablePlayers from './Sections/AvailablePlayers';
import SelectedPlayers from './Sections/SelectedPlayers';

const fetchPlayers = async () => {

  const res = await fetch("/players.json")
  return res.json();

}

const App = () => {

  const playersPromise = fetchPlayers();

  return (
    <>
      <Navbar/>
      <Hero/>
      <Suspense fallback={"Loading...."}>
        <AvailablePlayers playersPromise={playersPromise}/>
      </Suspense>
      <SelectedPlayers/>
    </>
  )
}

export default App;