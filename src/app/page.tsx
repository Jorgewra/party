"use client";
import ConfirmFormCard from "@/components/confirmHome/confirmFormCard";
import styles from "./page.module.css";
import { Button } from "@mui/material";
import React, { useState } from 'react'

export default function Home() {
 
  return (
    <main className={styles.main}>
     
      <div className={styles.center}>
        <div className={styles.container}>
          <p>{"Quarentou de casa nova"}</p>
        </div>        
      </div>
      <ConfirmFormCard />
    </main>
  );
}
