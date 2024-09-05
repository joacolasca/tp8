'use client';

import { useEffect, useState } from 'react';
import Titulo from'./components/Titulo/Titulo';
import Subtitulo from './components/Subtitulo/Subtitulo'; 
import Bandera from './components/Bandera/Bandera';
import Input from './components/Input/Input';
import Puntos from './components/Puntos/Puntos';
import Timer from './components/Timer/Timer';

export default function CountryFlagGame() {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [feedback, setFeedback] = useState('');
  const [puntos, setPuntos] = useState(0);
  const [remainingTime, setRemainingTime] = useState(15);
  const [resetTimer, setResetTimer] = useState(false);

  const fetchCountries = async () => {
      try {
          const response = await fetch('https://countriesnow.space/api/v0.1/countries/flag/images');
          const data = await response.json();
          setCountries(data.data);

          const randomCountry = data.data[Math.floor(Math.random() * data.data.length)];
          setSelectedCountry(randomCountry);
      } catch (error) {
          console.error('Error fetching countries:', error);
      }
  };

  useEffect(() => { 
    fetchCountries();
  }, []);

  const handleSubmit = (userGuess) => {
      if (selectedCountry && userGuess.toLowerCase() === selectedCountry.name.toLowerCase()) {
          setFeedback('¡Correcto! Has adivinado la bandera.');
          setPuntos(puntos + 10 + remainingTime); 
          setRemainingTime(15); 
          fetchCountries(); 
          setResetTimer(prev => !prev); 
      } else {
          setFeedback('Lo siento, intenta de nuevo.');
          setPuntos(puntos - 1); 
      }
  };

  const handleTimeOut = (timeLeft) => {
      setPuntos(puntos + timeLeft);
      setFeedback('El tiempo se agotó. ¡Prueba con otra bandera!');
      fetchCountries(); 
      setRemainingTime(15);
      setResetTimer(prev => !prev);
  };

  return (
      <div>
          <Titulo text="Adivina la Bandera del País" />
          <Subtitulo text="¿Puedes adivinar a qué país pertenece esta bandera?" />
          {selectedCountry && (
              <>
                  <Bandera url={selectedCountry.flag} alt={`Flag of ${selectedCountry.name}`} />
                  <Input onSubmit={handleSubmit} />
                  {feedback && <p style={{ textAlign: 'center', marginTop: '20px' }}>{feedback}</p>}
                  <Puntos puntaje={puntos} />
                  <Timer onComplete={handleTimeOut} reset={resetTimer} />
              </>
          )}
      </div>
  );
}
