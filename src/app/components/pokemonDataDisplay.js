import React,{useState} from 'react';

const pokemonDataDisplay = (props) =>{

   const [ displayName, setDisplayName ] = useState("");
   const [ cardSet, setCardSet ] = useState("");
   const [ evolutionLevel, setEveolutionLevel ] =  useState("");
   const [ types, setTypes ] = useState("");
   const [ image, setImage ] = useState("");
   const [ tcgplayerMidPrice, setTcgplayerMidPrice ] = useState("");

    return(
      //this might change
        <div id="dispay-container">
          <div id="mainData">
            <div id="name">
              <h3 id="name">{displayName}</h3>
            </div>
            <img id="image">{image}</img>
            <h5 id="cardSet">{cardSet}</h5>
            <h6 id="midPrice">{tcgplayerMidPrice}</h6>
          </div>
          <div id="lesserData">
            <span id="evolutionLevel">{evolutionLevel}</span>
            <span id="types">{types}</span>
          </div>
        </div>
    )
}

export default pokemonDataDisplay;  
