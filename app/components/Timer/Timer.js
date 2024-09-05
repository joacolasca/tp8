'use client';
import React, { useEffect, useState } from 'react';
import styles from './Timer.module.css'; 
import { CountdownCircleTimer } from "react-countdown-circle-timer";

export default function Timer({ onComplete, reset }) {
    const [key, setKey] = useState(0); // Cambia la clave para reiniciar el temporizador

    // Efecto para reiniciar el temporizador cuando `reset` cambia
    useEffect(() => {
        setKey(prevKey => prevKey + 1); // Actualiza la clave para forzar el reinicio
    }, [reset]);

    return (
        <div className={styles.Container}>
            <CountdownCircleTimer
                key={key} // El temporizador se reinicia cuando cambia la clave
                isPlaying
                duration={15}
                colors={[
                    ["#004777", 0.33],
                    ["#F7B801", 0.33],
                    ["#A30000", 0.33],
                ]}
                onComplete={() => {
                    onComplete(0); // Notifica que el tiempo se ha agotado
                    return { shouldRepeat: false }; // No repetir automáticamente
                }}
            >
                {({ remainingTime }) => (
                    <div className={styles.TimerCircle}>
                        {remainingTime}
                    </div>
                )}
            </CountdownCircleTimer>
        </div>
    );
}
