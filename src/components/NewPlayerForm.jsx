import { useState } from "react"

function NewPlayerForm() {
    // use ("") as initial state to represent empty string
    const [playerName, setPlayerName] = useState("");
    const [playerBreed, setPlayerBreed] = useState("");
    const [playerImage, setPlayerImage] = useState("");

    const handleSubmit = async (name, breed, imageUrl) => {
        event.preventDefault();
          
          try {
              const response = await fetch("https://fsa-puppy-bowl.herokuapp.com/api/2403-FTB-ET-WEB-PT/players",{
              method: "POST",
              headers: {"Content-Type": "application/json"},
              body: JSON.stringify( {
                          name,
                          breed,
                          imageUrl,
                   })
              });
              const result = await response.json();
              console.log(result);
  
              // clears inputs after we hit submit, stay within try {}
              setPlayerName("");
              setPlayerBreed("");
              setPlayerImage("");
          } catch (error) {
              setError(error.message);
          }};

    return (
      <>
        <div>
        <h1>New Player Form</h1>
  
        </div>
          
      </>
    )
  }
  
  export default NewPlayerForm