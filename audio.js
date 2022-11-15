const audio = new Audio("audio/frankenstein.mp3");
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    audio.play();
  });
});
