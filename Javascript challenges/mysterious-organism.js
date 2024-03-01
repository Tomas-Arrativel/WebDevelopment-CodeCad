// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (num, dnasArr) => {
  return {
    specimenNum: num,
    dna: dnasArr,
    mutate() {
      let mutatedDna = this.dna[0];
      while (mutatedDna === this.dna[0]) {
        mutatedDna = returnRandBase();
      }
      return mutatedDna;
    },
  };
};

const prototype = pAequorFactory(4323423, ['A', 'C', 'G', 'G', 'T']);
prototype.mutate();
