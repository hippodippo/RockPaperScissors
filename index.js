const readline = require('readline-sync');

const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();

  if (userInput === "rock")
    return userInput;
  else if (userInput === "paper")
    return userInput;
  else if (userInput === "scissors")
    return userInput;
  else if (userInput === "bomb")
    return userInput;
  else
    console.log("Error: Invalid input");
}

const getComputerChoice = () => {
  var num = Math.floor(Math.random() * 3);

  if (num === 0)
    return "rock";
  else if (num === 1)
    return "paper";
  else
    return "scissors";
}

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === "bomb")
    return "Player wins!";

  if (userChoice === computerChoice)
    return "Tie";

  if (userChoice === "rock") {
    if (computerChoice === "scissors")
      return "Player wins!";
    else
      return "Computer wins!";
  } else if (userChoice === "paper") {
    if (computerChoice === "rock")
      return "Player wins";
    else
      return "Computer wins!";
  } else if (userChoice === "scissors") {
    if (computerChoice === "paper")
      return "Player wins!";
    else
      return "Computer wins!";
  }
}

// Game loop. (Press Control + c to end game)

while (true) {

  var user = readline.question("Rock Paper or Scissors? ");
  console.log(determineWinner(user, getComputerChoice()), "\n");

}