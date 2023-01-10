import React from 'react';
import './Main.css';
import background from '../../background.png';
import { animals } from '../../data.js';
import Animal from '../Animal/Animal.js';

export default function Main() {
  return (
    <main style={{ backgroundImage: `url(${background})` }}>
      {animals.map((prop) => (
        <Animal key={prop.name} {...prop} />
      ))}
    </main>
  );
}
