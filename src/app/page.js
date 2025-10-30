'use client';

import React, { useState } from 'react';

import Image from "next/image";
import PokemonDataDisplay from './components/pokemonDataDisplay';
import styles from "./page.module.css";

export default function Home() {
  const API_KEY='';//API from card site and tcg
  const [name, setName] = useState("");

  const handlePokemonInput = (event) => {
    setName(event.target.value);
  } 

  const submitPokemon = (event) => {
    event.preventDefault();
    console.log("this is the pokemon you're looking for", name);
    fetch(`https://api.pokemontcg.io/v2/cards`, {
      method: 'GET',
      mode: 'cors',
      headers:{
        'X-Api-Key': API_KEY,
        },
      })
      .then((response) => response.json())
      .then((data) => console.log('this is the data retreived', data))
      .catch((err) => console.log('ERROR:', err))
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
