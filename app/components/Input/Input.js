// components/Input/Input.js
'use client'; // Asegúrate de agregar esta línea

import React, { useState } from 'react';
import styles from './Input.module.css'; // Importar el módulo CSS

export default function Input({ onSubmit }) {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(inputValue);
        setInputValue('');
    };

    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit} className={styles.form}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleChange}
                    placeholder="Escribe el nombre del país"
                    className={styles.input}
                />
                <button type="submit" className={styles.button}>Enviar</button>
            </form>
        </div>
    );
}
