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
          <h3 id="name">{props.displayName}</h3>

        </div>
    )
}

export default pokemonDataDisplay;  
