/**
 * Let us play a number guessing game.
 * You will ask user for a number between 1 to 10. Once user will enter a number, you will tell user if the entered number is lower or higher. With this information, user will change the number and finally guess the right number. You also need to show the number of attempts made by users to rach to this right guess.
 */

console.log("Welcome to the secret number guessing game.");

function findSecretNumber() {
  const randomNumber = Math.floor(Math.random() * 10) + 1;
  let userInput = null;

  let attempts = 0;

  while (userInput !== randomNumber) {
    let userPrompt = prompt("Guess any number between 1 to 10");
    userInput = userPrompt ? parseInt(userPrompt) : "no";
    if (userInput === "no") {
      break;
    }

    attempts++;

    if (userInput > randomNumber) {
      console.log("You guessed too high. Choose lower number");
    } else if (userInput < randomNumber) {
      console.log("You guessed too low. Choose higher number");
    } else {
      console.log(
        "Congrats. You guessed it right after " + attempts + " attempts"
      );
      const playAgainPrompt = prompt("Do you want to play again? (yes/no)");
      const playAgainAnswer = playAgainPrompt
        ? playAgainPrompt.toLowerCase()
        : "no";

      if (playAgainAnswer === "no") {
        console.log("Thanks for playing. Hope to see you again");
      } else {
        findSecretNumber();
      }
    }
  }
}

findSecretNumber();
