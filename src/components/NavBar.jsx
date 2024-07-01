import { Routes, Route, NavLink } from 'react-router-dom'
import AllPlayers from './AllPlayers'
import SinglePlayer from './SinglePlayer'


function NavBar() {


    return (
      <>
 <div id="container">

<div id="navbar" className='nav-links'>
  <NavLink to="/">Home</NavLink>
  <NavLink to="/:id">Single Player</NavLink>

</div>

</div>
          
      </>
    )
  }
  
  export default NavBar