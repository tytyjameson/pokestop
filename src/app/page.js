'use client';

import React, { useState } from 'react';

import Image from "next/image";
import PokemonDataDisplay from './components/pokemonDataDisplay';
import styles from "./page.module.css";

//hold this here for now, have to make API call from the backend 
export const getStaticProps = async () => {
  const API_KEY='90ec5b1d-ba3f-4743-9487-4259b89eb628';//API from card site and tcg
    const response = await fetch(`https://api.pokemontcg.io/v2/cards`, {
      method: 'GET',
      headers:{
        'X-Api-Key': API_KEY,
        },
      })
    const data = await response.JSON();
    console.log(data)
  return {
    props:{pokemonData: data}
    }
  }

  console.log('this is the big pokemon object', pokemonData)

function Home({pokemonData}) {
  // const API_KEY='';//API from card site and tcg
  const [name, setName] = useState("");
  console.log('this is the big pokemon object', pokemonData)
  const handlePokemonInput = (event) => {
    setName(event.target.value);
  
  } 
//set up a proxy in order to make api call

  const submitPokemon = (event) => {
    event.preventDefault();
    console.log("this is the pokemon you're looking for", name);
    // fetch(`https://api.pokemontcg.io/v2/cards`, {
    //   method: 'GET',
    //   mode: 'cors',
    //   headers:{
    //     'X-Api-Key': API_KEY,
    //     },
    //   })
    //   .then((response) => response.json())
    //   .then((data) => console.log('this is the data retreived', data))
    //   .catch((err) => console.log('ERROR:', err))
      // console.log('this is the pokemon call via name query',pokemon)
  }
  
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div>
          <form onSubmit={submitPokemon}>
            <label>
              <span>
                Enter Pokemon Name Below:
              </span>
            <input type="text" value={name} onChange={handlePokemonInput}/>
            </label>
            <button type="submit">Submit</button>
          </form>
        </div>
        <div id="dataDisplay">
          <PokemonDataDisplay name={name} />
        </div>
      </main>
      <footer className={styles.footer}>
      </footer>
    </div>
  )
}

export default Home;