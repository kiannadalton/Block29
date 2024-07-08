import { NavLink } from 'react-router-dom'

function NavBar() {


    return (
      <>
 <div id="container">

<div id="navbar" className='nav-links'>
  <NavLink to="/players">All Players</NavLink>
    {/* potentially something wrong here */}
  <NavLink to="/players/:playerId">Single Player</NavLink>

</div>

</div>
          
      </>
    )
  }
  
  export default NavBar