const container = document.getElementById('app');

const root = createRoot(container);

const title = '';
const animalFacts = (
  <h1>{title === '' ? 'Click an animal for a fun fac' : title}</h1>
);

root.render(animalFacts);
