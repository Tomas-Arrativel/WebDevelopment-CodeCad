let typeOfPhrase = {
  motivation: [
    'never give up',
    'embrace the discomfort',
    'strive for progress, not perfection',
    'believe in your potential',
    'challenge yourself every day',
    'prioritize your health and fitness',
  ],
  signInfo: ['star', 'moon', 'sun', 'comet'],
  advice: ['go out and eat', 'not read this', 'play more', 'trust no one'],
};

const randomNum = (num) => {
  return Math.floor(Math.random() * num);
};

let final = [];

for (let niche in typeOfPhrase) {
  let selectedNum = randomNum(typeOfPhrase[niche].length);
  if (niche === 'motivation')
    final.push(`You should ${typeOfPhrase[niche][selectedNum]}`);
  else if (niche === 'signInfo')
    final.push(`You are like a ${typeOfPhrase[niche][selectedNum]}`);
  else if (niche === 'advice')
    final.push(`You can try to ${typeOfPhrase[niche][selectedNum]}`);
  else final.push('There is not enough info.');
}

console.log(final);
