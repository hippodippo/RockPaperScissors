const readline = require('readline-sync');

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

  var userInput = readline.question("Rock Paper or Scissors? ")
    .trim()
    .toLowerCase();

  console.log("\n" + determineWinner(userInput, getComputerChoice()), "\n");

}