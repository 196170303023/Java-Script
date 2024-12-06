let randomNumber = Math.floor(Math.random() * 100) + 1;
let userGuess;

do {
    userGuess = prompt("Guess the number (between 1 and 100)")
    userGuess = Number.parseInt(userGuess);

     if (userGuess > randomNumber) {
        prompt("Too high! Try again")
    } else if (userGuess < randomNumber) {
        prompt("Too low! Try again")
    } else {
        alert("Congratulations! You guessed the correct number")
    }
} while (userGuess !== randomNumber)



