const screen = document.querySelector(".screen");
const buttons = document.querySelectorAll(".buttons button");
const coinSound = new Audio("/Pratice/calcolatrice/sounds/coin_sound.mp3");
const gameOverSound = new Audio("game_over_sound.mp3");
const equalSound = new Audio("/Pratice/calcolatrice/sounds/equal_sound.mp3");

let expression = "";
let coinSoundPlaying = false;

coinSound.volume = 0.5;
gameOverSound.volume = 0.5;
equalSound.volume = 0.5;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.textContent === "=") {
      try {
        const result = eval(expression);
        screen.textContent = result;
        expression = result.toString();
        playEqualSound();
      } catch (error) {
        screen.textContent = "Error";
        expression = "";
      }
    } else if (button.textContent === "C") {
      expression = "";
      screen.textContent = "";
      gameOverSound.currentTime = 0;
      gameOverSound.play();
    } else {
      expression += button.textContent;
      screen.textContent = expression;

      if (coinSoundPlaying) {
        coinSound.pause();
      }
      coinSound.currentTime = 0;
      coinSound.play();
      coinSoundPlaying = true;
    }
  });
});

function playEqualSound() {
  equalSound.currentTime = 0;
  equalSound.play();
}
