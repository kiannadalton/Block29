import './index.css'
import AllPlayers from './components/AllPlayers'
import NavBar from './components/NavBar'
import SinglePlayer from './components/SinglePlayer'
import {Routes, Route} from 'react-router-dom'

function App() {


  return (
    <>

     <nav>
      <NavBar />
     </nav>

    <br />

    <div>
      <AllPlayers />

    </div>
        
    <Routes>
      <Route path="/players" element={<AllPlayers/>} />
      <Route path='/players/:playerId' element={<SinglePlayer />} />
    </Routes>  

    </>
  )
}

export default App
