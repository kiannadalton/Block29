import React from "react";
import { useNavigate } from "react-router-dom"
import { useFetchPlayersQuery } from "../API/puppyBowlApi";
import SearchBar from "./SearchBar";
import { useState, useEffect } from "react";
import NewPlayerForm from "./NewPlayerForm";


const AllPlayers = () => {
    // Use the generated hook to fetch data from the API
    // When the component is first rendered, it will start the API fetch
    // It will re-render each time the fetch status changes (e.g., "loading", "data arrived", "error")
    const navigate = useNavigate();
    const { data = {}, isLoading, error, refetch } = useFetchPlayersQuery();
    const [searchParameter, setSearchParameter] = useState("");

    useEffect(() => {refetch();}, [])
    // console.log("data", data);
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
  
    const playersToDisplay =
    searchParameter && data
      ? data?.data?.players.filter((player) => {
        // parameter.keyWeWant.toLowerCase searches for the name in any case. Make sure to toLowerCase the searchParameter, as well.
          return player.name.toLowerCase().includes(searchParameter.toLowerCase());
        })
      : data?.data?.players;


    // Show the fetched data after it has arrived
    return (
    <section>
     <NewPlayerForm />

        <SearchBar
        searchParameter={searchParameter}
        setSearchParameter={setSearchParameter}
      />

      <div className="players">

        {isLoading && <p>{message}</p>}
        {error && <p>{message}</p>}

  
        {/* Map through the data array and generate a div for each player */}
        {playersToDisplay && 
        playersToDisplay.map((player) => (
          // Use the player's ID as the key for this div
            <div key={player.id} className="player-card">
                
                    <div className="player-details">
                    <h3>  Name: {player.name} </h3> 
                    </div>

                    <div>
                    <img src={player.imageUrl} alt={player.name}/>
                    </div>

                    <button onClick={() => navigate(`/players/${player.id}`)}>
                        See Details
                    </button>


            </div>
        ))}
      </div>
      </section>
    );
  };
  
  export default AllPlayers