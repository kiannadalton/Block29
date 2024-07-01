import React from "react";
import { useNavigate } from "react-router-dom"
import { useFetchPlayersQuery, useUpdatePlayerMutation } from "../API/puppyBowlApi";


const AllPlayers = () => {
    // Use the generated hook to fetch data from the API
    // When the component is first rendered, it will start the API fetch
    // It will re-render each time the fetch status changes (e.g., "loading", "data arrived", "error")
    const { data = {}, isLoading, error } = useFetchPlayersQuery();
    const [updatePlayer] = useUpdatePlayerMutation();
    const navigate = useNavigate();
  
    // Show a loading message while data is being fetched
    let message;

    if (isLoading) {
      return message = "Loading players...";
    }
  
    // Show an error message if the fetch failed
    if (error) {
      console.log(error);
      return message = "Something went wrong! Please try again.";
    }
  
    // Show the fetched data after it has arrived
    return (
      <div className="players">
        {isLoading && <p>{message}</p>}
        {error && <p>{message}</p>}

        {/* testing what data.data.players and data.players says */}
        {/* comes up as undefined */}
        {console.log(data.players)}
  
        {/* Map through the data array and generate a div for each player */}
        {data.data.players.map((player) => (
          // Use the player's ID as the key for this div
          <div key={player.id} className="player-card">
            {/* see if just id.key or something else to populate info */}
            <img src={player.imageUrl} alt={player.name}/>

            
            <div className="player-details">
              
              <h2>  Name: {player.name} </h2> 
              
              <p>  Breed: {player.breed} </p> 
              
              <p> Status: {player.status} </p>

              <button onClick={() => navigate(`/players/${player.id}`)}/>
                
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default AllPlayers