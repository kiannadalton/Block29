import { useFetchPlayerQuery } from "../API/puppyBowlApi"
import { useParams, useNavigate, Link } from "react-router-dom"


// useNavigate in return 

function SinglePlayer() {
    const { playerId } = useParams(); 
    // const navigate = useNavigate();

// displays id okay
    // console.log("playerId", playerId);

    // (id) ties it to See Details player
    const { data ={}, error, isLoading } = useFetchPlayerQuery(playerId);

    if (isLoading) {
      return <div>
                <p>Loading players...</p>
            </div>
    }
  
    // Failing here. Might need to initialize with a useState players?
    // Show an error message if the fetch failed
    if (error) {
      console.log(error);
      return  <div>
                 <p>Whoops! Something went wrong. Please try again later.</p>
              </div>
    }

        // console.log("player", data)
    const player = data.data.player;


    // console.log("player", player);

    return (
        <div className="singlePlayer">

            {player &&
            
            <div key={player.id} className="player-card">
            
            <div className="player-details">
              <h2> Name: {player.name} </h2> 
              <p> Player #: {player.id}</p>
              <p> Breed: {player.breed} </p> 
              <p> Status: {player.status} </p>
              {/* <h2>Team: {player.team.name || "None"}</h2> */}
            </div>

            <img src={player.imageUrl} alt={player.name}/>

        </div>
            
            }
        </div>
    )}
  
  export default SinglePlayer;