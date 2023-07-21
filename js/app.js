// Assigning Values
let min = 1,
  max = 10,
  correctGuess = getRandomNum(min, max),
  guessLeft = 3;

// UI variables
const game = document.querySelector("#game"),
  minNum = document.querySelector(".min-num"),
  maxNum = document.querySelector(".max-num"),
  guessInput = document.querySelector("#guess-input"),
  submitBtn = document.querySelector("#guess-btn"),
  message = document.querySelector(".message");

// Assigning the Max and Min Value
minNum.textContent = min;
maxNum.textContent = max;

// Play again event listener
game.addEventListener("mousedown", function (e) {
  if (e.target.className === "play-again") {
    window.location.reload();
  }
});

// Add event listner to Submit button
submitBtn.addEventListener("click", enterGuess);

// let guess = guessInput.value;

// Validate input
function enterGuess() {
  let guess = guessInput.value;

  if (guess == "" || guess > max || guess < min) {
    // Display Error Message
    setMessage(`Please enter a number between ${min} and ${max}`, "red");
  } else if (guess == correctGuess) {
    //Display Congratulatory Message
    setMessage(`${correctGuess} is correct, YOU WIN!`, "green");
    // PLay Again?
    submitBtn.value = "Play Again";
    submitBtn.className += "play-again";

    // Disable input
    guessInput.disabled = true;
  } else {
    //Reduce the number of guesses left
    guessLeft -= 1;
    if (guessLeft == 0 || guessLeft < 0) {
      //Game Over
      guessInput.disabled = true;
      setMessage(`Game over. YOU LOSE. The correct number was ${correctGuess}`, "red");
      // PLay Again?
      submitBtn.value = "Play Again";
      submitBtn.className += "play-again";
    } else {
      guessInput.value = "";
      setMessage(`${guess} is incorrect. You have ${guessLeft} guesses left`, "red");
    }
  }
}

// Get Winning Number
function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function setMessage(msg, color) {
  message.style.color = color;
  guessInput.style.borderColor = color;
  message.textContent = msg;
}
