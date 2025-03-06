/**
 * The Rock 🪨, Paper 🧻, or Scissors ✂️ Game
 * This game will be played between the computer and human. Once Human will select Rock, Paper, or Scissors and in the next turn the computer will select Rock, Paper, or Scissors.
 * The Winner will be selected based on these rules:
 * - Rock can Break Scissors => Rock Wins
 * - Paper can wrap Rock => paper Wins
 * - Scissors can cut Paper => Scissors Wins
 * Ask the input from user and randomly select a computer selection to continue the game.
 */

console.log("Getting Started With the Rock 🪨, Paper 🧻, or Scissors ✂️ Game");

function rockPaperScissorsGame() {
  const userPrompt = prompt("Choose between rock, paper and scissors.");
  const userChoice = userPrompt ? userPrompt.toLowerCase() : "exit";

  let computerChoice;

  const randomNumber = Math.floor(Math.random() * 3) + 1;

  switch (randomNumber) {
    case 1:
      computerChoice = "rock";
      break;
    case 2:
      computerChoice = "paper";
      break;
    case 3:
      computerChoice = "scissors";
      break;
    default:
      computerChoice = "";
  }

  console.log("User choice, ", userChoice);
  console.log("Computer choice, ", computerChoice);

  if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "scissors" && computerChoice === "paper") ||
    (userChoice === "paper" && computerChoice === "rock")
  ) {
    console.log("Congrats, You win!!");
  } else if (
    (userChoice === "paper" && computerChoice === "scissors") ||
    (userChoice === "rock" && computerChoice === "paper") ||
    (userChoice === "scissors" && computerChoice === "rock")
  ) {
    console.log("Oh no, Computers wins :(");
  } else if (userChoice === computerChoice) {
    console.log("It's a tie");
  } else {
    console.log("Please use valid inputs");
  }

  //   Play again
  const playAgainPrompt = prompt("Do you want to play again? (yes/no)");
  const playAgainChoice = playAgainPrompt
    ? playAgainPrompt.toLowerCase()
    : "no";

  if (playAgainChoice === "yes") {
    rockPaperScissorsGame();
  } else {
    console.log("Thanks for playing the game. Hope to see you soon again.");
  }
}

rockPaperScissorsGame();
