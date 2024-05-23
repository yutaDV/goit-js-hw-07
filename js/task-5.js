
const widget = document.querySelector("body");
const button = document.querySelector(".btn-change-color");
const colorSpan = document.querySelector(".color");

button.addEventListener("click", changeColor);

function changeColor(event) {
  event.preventDefault();
  const newColor = getRandomHexColor();
  widget.style.backgroundColor = newColor;
  colorSpan.textContent = newColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}