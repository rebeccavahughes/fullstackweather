import React from 'react';
import Weather from './components/getWeather';
import Chuck from './components/chucknorris';
import Gameofthrones from './components/gameofthrones';
import './App.css';

export default function App() {
  return (
    <div className="apps">
    <div className="weather">
      <Weather />
    </div>
    <div className="chuck">
      <Chuck />
    </div>
    <div className="got">
      <Gameofthrones />
    </div>
    </div>
  );
}