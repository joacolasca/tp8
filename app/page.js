'use client';

import { useEffect, useState } from 'react';
import Titulo from'./components/Titulo/Titulo'
import Subtitulo from './components/Subtitulo/Subtitulo'; 
import Bandera from './components/Bandera/Bandera';
import Input from './components/Input/Input';

export default function CountryFlagGame() {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [feedback, setFeedback] = useState('');

  useEffect(() => {
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

      fetchCountries();
  }, []);

  const handleSubmit = (userGuess) => {
      if (selectedCountry && userGuess.toLowerCase() === selectedCountry.name.toLowerCase()) {
          setFeedback('¡Correcto! Has adivinado la bandera.');
      } else {
          setFeedback('Lo siento, intenta de nuevo.');
      }
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
              </>
          )}
      </div>
  );
}