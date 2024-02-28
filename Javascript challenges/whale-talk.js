const input = 'one step at a time';
const vowels = ['a', 'e', 'i', 'o', 'u'];

let resultArray = [];

for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < vowels.length; j++) {
    if (input[i] === vowels[j]) resultArray.push(vowels[j]);
  }
}

console.log(resultArray);
