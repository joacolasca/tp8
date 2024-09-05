'use client';
import React from 'react';
import styles from './Puntos.module.css'; 

export default function Puntos({ puntaje }) {
    return (
        <div className={styles.container}>
           <h2 className={styles.text}>Su puntuacion es: {puntaje}</h2>
        </div>
    );
}
