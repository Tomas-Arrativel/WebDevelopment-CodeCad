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

    compareDNA(pAequor) {
      let equalEls = 0;
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === pAequor.dna[i]) equalEls++;
      }
      console.log(
        `specimen #1 and specimen #2 have ${
          (equalEls / this.dna.length) * 100
        }% DNA in common`,
      );
    },

    willLikelySurvive() {
      let percentaje = 0;
      this.dna.forEach((el) =>
        el === 'C' || el === 'G' ? percentaje++ : percentaje,
      );
      const finalPercentaje = (percentaje / this.dna.length) * 100;
      return finalPercentaje >= 60;
    },
  };
};

let pAequorSurvivals = [];

for (let i = 1; i <= 30; i++) {
  let survivalDNA = pAequorFactory(i, mockUpStrand());
  while (!survivalDNA.willLikelySurvive()) {
    survivalDNA = pAequorFactory(i, mockUpStrand());
  }
  pAequorSurvivals.push(survivalDNA);
}

pAequorSurvivals.forEach((pAequor) => console.log(pAequor.willLikelySurvive()));
