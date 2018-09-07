const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput;
  } else {
    return console.log('User must input either \"rock\", \"paper\", or \"scissors\"');
  };
};

function getComputerChoice(){
  switch (Math.floor(Math.random()*3)) {
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    case 2:
      return 'scissors';
      break;
    default:
      return console.log('error!');
      break;
  };

}

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return 'The game was a tie';
  }
  if (userChoice === 'bomb') {
    return 'The user automatically won!';
  }
  if (userChoice === 'rock') {
    if (computerChoice ==='paper'){
      return 'The computer won';
    } else {
      return 'The user won';
    }
  }
  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'The computer won!';
    } else {
      return 'The user won.';
    }
  }
  if (userChoice ==='scissors') {
    if (computerChoice === 'rock') {
      return 'The computer won';
    } else {
      return 'The user won.';
    }
  }
}

function playGame() {
  const userChoice = getUserChoice('bomb');
  const computerChoice = getComputerChoice();
  console.log('Your choice is ' + userChoice);
  console.log('The computer choice is ' + computerChoice)
  
  console.log(determineWinner(userChoice, computerChoice));
}

playGame();

