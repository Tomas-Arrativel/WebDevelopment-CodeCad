const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors')
    return userInput;
  else console.log("You haven't give a valid value");
};

const getComputerChoice = () => {
  const options = ['rock', 'paper', 'scissors'];
  const choice = Math.floor(Math.random() * 3);
  return options[choice];
};

getUserChoice('Paper');
console.log(getComputerChoice());
