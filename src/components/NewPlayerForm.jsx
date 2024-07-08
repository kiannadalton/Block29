import { useState } from "react"
import { useAddPlayerMutation } from "../API/puppyBowlApi";
import { useNavigate } from "react-router-dom";

const NewPlayerForm = () => {
    const navigate = useNavigate();
    const [addPlayer] = useAddPlayerMutation();
    // use ("") as initial state to represent empty string
    const [name, setName] = useState("");
    const [breed, setBreed] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    const handleSubmit = async event => {
        event.preventDefault();
          
              const response = await addPlayer({name, breed, imageUrl}) 
                // clears inputs after we hit submit
                setName("");
                setBreed("");
                setImageUrl("");
      
                // sample response shows 'newPlayer' in api documentation
                navigate(`/players/${response.data.data.newPlayer.id}`)
              };

    return (
      <>
        <div className="new-player-form">
            <h1>New Player Form</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Name: <input value={name} onChange={(event)=> setName(event.target.value)} />
                </label>

                <label>
                    Breed: <input value={breed} onChange={(event) => setBreed(event.target.value)} />
                </label>

                <label>
                    Image URL:
                    <input value={imageUrl} onChange={(event) => setImageUrl(event.target.value)}/>
                </label>

                <button>Submit</button>

            </form>
        </div>
      </>
    )
  }
  
  export default NewPlayerForm