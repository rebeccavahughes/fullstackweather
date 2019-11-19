import React from 'react';
import Weather from './components/getWeather';
import Chuck from './components/chucknorris';
import Gameofthrones from './components/gameofthrones';

export default function App() {
  return (
    <div>
    <div>
      <Weather />
    </div>
    <div>
      <Chuck />
    </div>
    <div>
      <Gameofthrones />
    </div>
    </div>
  );
}