import { useFetchPlayersQuery } from "../API/puppyBowlApi"

import { useParams } from "react-router-dom"

function SinglePlayer() {
    const { id } = useParams(); 

    // const singlePlayerID = puppyBowlApi.data.players.find((singlePlayer) => { 
    //     return singlePlayer.id === parseInt(id);
    // });
    // console.log(puppyBowlApi.data)

    return (
        <div className="singlePlayer">
            <h1>Single Player</h1>
            {/* <img src={SinglePlayerID.imageUrl} alt={SinglePlayerID.name}/>
            {data.data.players.map((player) => (
          // Use the player's ID as the key for this div
          <div key={player.id} className="player-card">
            {/* see if just id.key or something else to populate info */}
            {/* <img src={player.imageUrl} alt={player.name}/>

            
            <div className="player-details">
              
              <h2>  ${player.name} </h2> 
              
              <p>  ${player.breed} </p> 
              
              <p> ${player.status} </p>
            </div> */}
        </div>
         )}
  
  export default SinglePlayer;