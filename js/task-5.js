
const widget = document.querySelector(".widget");
const button = document.querySelector(".btn-change-color");

button.addEventListener("click", changeColor);

function changeColor(event) {
  event.preventDefault();

  const newColor = getRandomHexColor();
  console.log(newColor)
  widget.style.backgroundColor = newColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}