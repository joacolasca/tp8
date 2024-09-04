import React from 'react';
import styles from './Titulo.module.css';

export default function Titulo({ text }) {
    return (
        <h1 className={styles.title}>
            {text}
        </h1>
    );
}
