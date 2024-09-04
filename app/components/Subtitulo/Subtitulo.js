import React from 'react';
import styles from './Subtitulo.module.css';

export default function Subtitulo({ text }) {
    return (
        <h2 className={styles.subtitulo}>
            {text}
        </h2>
    );
}
