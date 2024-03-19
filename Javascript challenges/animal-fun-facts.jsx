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

const animalFacts = (
  <div>
    <h1>{title === '' ? 'Click an animal for a fun fac' : title}</h1>
    {background}
  </div>
);

root.render(animalFacts);
