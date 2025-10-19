import React,{useState} from 'react';

const pokemonDataDisplay = () =>{

   const [ displayName, setDisplayName ] = useState("");
   const [ cardSet, setCardSet ] = useState("");
   const [ evolutionLevel, setEveolutionLevel ] =  useState("");
   const [ types, setTypes ] = useState("");
   const [ image, setImage ] = useState("");
   const [ tcgplayerMidPrice, setTcgplayerMidPrice ] = useState("");

    return(
        <div id="dispay-container">
          <h3 id="name">{pokemonName}</h3>

        </div>
    )
}

export default pokemonDataDisplay;  
