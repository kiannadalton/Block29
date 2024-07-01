import { useState } from 'react'
import './index.css'
import AllPlayers from './components/AllPlayers'
import NavBar from './components/NavBar'
import NewPlayerForm from './components/NewPlayerForm'
import SinglePlayer from './components/SinglePlayer'
import SearchBar from './components/SearchBar'
import {Routes, Route} from 'react-router-dom'



function App() {


  return (
    <>

     <nav>
      <NavBar />
     </nav>

    <div>
      <SearchBar />
      <NewPlayerForm />
      <AllPlayers />

    </div>
        
    <Routes>
      <Route path="/" element={<AllPlayers/>}></Route>
      <Route path="/players/:id" element={<SinglePlayer/>}></Route>
    </Routes>  

    </>
  )
}

export default App
