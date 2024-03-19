const container = document.getElementById('app');

const root = createRoot(container);

const title = '';

const background = (
  <img className='background' src='./images/ocean.jpg' alt='ocean' />
);

const animalFacts = (
  <div>
    <h1>{title === '' ? 'Click an animal for a fun fac' : title}</h1>
    {background}
  </div>
);

root.render(animalFacts);
