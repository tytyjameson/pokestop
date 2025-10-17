'use client';

import React, { useState } from 'react';

import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  const [name, setName] = useState("");

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
        </div>
      </main>
      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
