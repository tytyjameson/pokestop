'use client';

import React, { useState } from 'react';

import Image from "next/image";
import PokemonDataDisplay from './components/pokemonDataDisplay';
import styles from "./page.module.css";

export default function Home() {
  const API_KEY='8e2809a3-ee01-4482-8f81-bbbd087febf4';//API from card site and tcg
  const [name, setName] = useState("");

  const handlePokemonInput = (e) => {
    setName(e.target.value);
  } 

  const submitPokemon = (e) => {
    e.PreventDefault();
    console.log("this is the pokemon you're looking for", name)
  }
  const pokemon = fetch('https://api.pokemontcg.io/v2/cards/<id>',{
    method: 'GET',
    headers:{
      'X-Api-Key': ''//delete key before PR. 
      },
    })
    .then((response) => response.json())
    .then((data) => console.log('this is the data retreived', data))
    .catch((err) => console.log('ERROR:', err))
   
  
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
            <button type="submit">submit</button>
          </form>
        </div>
      </main>
      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
