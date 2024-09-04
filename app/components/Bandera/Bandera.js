// components/Bandera/Bandera.js
'use client'; // Asegúrate de agregar esta línea

import React from 'react';
import styles from './Bandera.module.css'; // Importar el módulo CSS

export default function Bandera({ url, alt }) {
    return (
        <div className={styles.container}>
            <img src={url} alt={alt} className={styles.imagen} />
        </div>
    );
}
