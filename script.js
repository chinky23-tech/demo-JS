let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;  // To count the number of attempts

console.log("Random number (for debugging):", randomNumber);  // Show the random number in the console

function checkGuess() {
    const userGuess = Number(document.getElementById("userGuess").value);  // Convert input to a number
    
    // Check if the input is valid
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        document.getElementById("feedback").innerHTML = "Please enter a number between 1 and 100.";
        return;
    }

    attempts++;

    console.log("User guess:", userGuess);  // Log the user's guess to see what was entered

    // Check if the guess is correct
    if (userGuess === randomNumber) {
        document.getElementById("feedback").innerHTML = "🎉 Congratulations! You guessed the correct number " + randomNumber + " in " + attempts + " attempts.";
    } else if (userGuess > randomNumber) {
        document.getElementById("feedback").innerHTML = "Too high! Try again.";
    } else if (userGuess < randomNumber) {
        document.getElementById("feedback").innerHTML = "Too low! Try again.";
    }
}