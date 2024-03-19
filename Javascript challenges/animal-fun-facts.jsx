const container = document.getElementById('app');

const root = createRoot(container);

const title = '';

const background = (
  <img className='background' src='./images/ocean.jpg' alt='ocean' />
);

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
    />
  );
  images.push(image);
}

const displayFact = (e) => {
  const animal = e.target.alt;
  const optionIndex = Math.floor(Math.random() * animal.facts.length);
  const funFact = animal.facts[optionIndex];
};

const animalFacts = (
  <div>
    <h1>{title === '' ? 'Click an animal for a fun fac' : title}</h1>
    {background}
    <div className='animals'>{images}</div>
  </div>
);

root.render(animalFacts);
