import { animals } from './animals';
import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container);

const title = '';

const background = (
  <img className='background' src='./images/ocean.jpg' alt='ocean' />
);

const displayFact = (e) => {
  const animalName = e.target.alt;
  const animal = animals[animalName];
  const optionIndex = Math.floor(Math.random() * animal.facts.length);
  const funFact = animal.facts[optionIndex];
  document.getElementById('fact').innerHTML = funFact;
};

let images = [];
for (const animal in animals) {
  const image = (
    <img
      key={animal}
      className='animal'
      alt={animal}
      src={animals[animal].image}
      aria-label={animal}
      role='button'
      onClick={displayFact}
    />
  );
  images.push(image);
}

const animalFacts = (
  <div>
    <h1>{title === '' ? 'Click an animal for a fun fact' : title}</h1>
    {background}
    <div className='animals'>{images}</div>
    <p id='fact'></p>
  </div>
);

root.render(animalFacts);
