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

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) return 'The game was a tie';
  if (userChoice === 'rock') {
    if (computerChoice !== 'paper') return 'The user wons';
    else return 'The computer wons';
  } else if (userChoice === 'paper') {
    if (computerChoice !== 'scissors') return 'The user wons';
    else return 'The computer wons';
  } else if (userChoice === 'scissors') {
    if (computerChoice !== 'rock') return 'The user wons';
    else return 'The computer wons';
  }
};

const playGame = (userChoice, computerChoice) => {
  console.log(`User: ${userChoice}, Computer: ${computerChoice}`);
  console.log(determineWinner(userChoice, computerChoice));
};

playGame(getUserChoice('Rock'), getComputerChoice());
