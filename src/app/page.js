'use client';

import React, { useState } from 'react';

import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  const [name, setName] = useState("");

  const handlePokemonInput = (e) => {
    setName(e.target.value);
  } 

  const submitPokemon = (e) => {
    e.PreventDefault();
    console.log("this is the pokemon you're looking for", name)
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
            <button type="submit">submit</button>
          </form>
        </div>
      </main>
      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
