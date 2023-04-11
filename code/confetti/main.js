import Confetti from "https://cdn.skypack.dev/canvas-confetti";

const celebrateButton = document.getElementById("celebrate-button");

celebrateButton.addEventListener("click", () => {
  Confetti();
});
