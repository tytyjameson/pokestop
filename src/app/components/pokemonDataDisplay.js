import React,{useState} from 'react';

const pokemonDataDisplay = (props) =>{

   const [ displayName, setDisplayName ] = useState("");
   const [ cardSet, setCardSet ] = useState("");
   const [ evolutionLevel, setEveolutionLevel ] =  useState("");
   const [ types, setTypes ] = useState("");
   const [ image, setImage ] = useState("");
   const [ tcgplayerMidPrice, setTcgplayerMidPrice ] = useState("");

    return(
        <div id="dispay-container">
          <h3 id="name">{displayName}</h3>
          <h5 id="cardSet">{cardSet}</h5>

        </div>
    )
}

export default pokemonDataDisplay;  
