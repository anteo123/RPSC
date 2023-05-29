function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock") {
    if (computerSelection === "rock") {
      return "It's a tie! Both players chose Rock.";
    } else if (computerSelection === "paper") {
      return "You Lose! Paper beats Rock.";
    } else if (computerSelection === "scissors") {
      return "You Win! Rock beats Scissors.";
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      return "You Win! Paper beats Rock.";
    } else if (computerSelection === "paper") {
      return "It's a tie! Both players chose Paper.";
    } else if (computerSelection === "scissors") {
      return "You Lose! Scissors beat Paper.";
    }
  } else if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      return "You Lose! Rock beats Scissors.";
    } else if (computerSelection === "paper") {
      return "You Win! Scissors beat Paper.";
    } else if (computerSelection === "scissors") {
      return "It's a tie! Both players chose Scissors.";
    }
  } else {
    return "Invalid selection. Choose either Rock, Paper, or Scissors.";
  }
}
// let playerSelection = "paper";
// let computerSelection = "scissors";
// console.log(computerPlay(playerSelection, computerSelection));

// Function to play a 5 round game of rock-paper-scissors
function game() {
  let playerScore = 0;
  let computerScore = 0;

  // Play 5 rounds
  for (let round = 1; round <= 5; round++) {
    const playerSelection = userInput(round);
    const computerSelection = getRandomSelection();

    const result = playRound(playerSelection, computerSelection);
    console.log("Round " + round + ": " + result);

    // Update scores based on the result
    if (result.split(" ").includes("Win!")) {
      playerScore++;
    } else if (result.split(" ").includes("Lose!")) {
      computerScore++;
    }
  }

  // Determine the winner or loser based on scores
  if (computerScore == playerScore) {
    return "It's a tie! The game ended in a draw.";
  } else if (computerScore > playerScore) {
    return "Oops! You lost the game.";
  } else return "You have won the game";
}

// Player input value

function userInput(random) {
  const inputValue = prompt(
    "Round " + random + ": Enter your choice (rock, paper, or scissors):"
  );
  if (
    inputValue === null ||
    (inputValue && !isNaN(inputValue)) ||
    inputValue === ""
  ) {
    return game();
  }

  let x = inputValue.toLocaleLowerCase().trim();
  return x;
}

// Function to get a random selection for the computer

function getRandomSelection() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}
