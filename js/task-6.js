
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}


const controls = document.querySelector('#controls');
const input = controls.querySelector('input');
const createButton = controls.querySelector('[data-create]');
const destroyButton = controls.querySelector('[data-destroy]');
const boxesContainer = document.querySelector('#boxes');


createButton.addEventListener('click', () => {
  const amount = parseInt(input.value);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = '';
  } else {
    alert('Please enter a number between 1 and 100');
  }
});

destroyButton.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  boxesContainer.innerHTML = ''; // Очищення попередніх елементів

  const boxesHTML = Array.from({ length: amount }, (_, i) => {
    const size = 30 + i * 10;
    const color = getRandomHexColor();
    return `<div style="width: ${size}px; height: ${size}px; background-color: ${color}; margin: 5px;"></div>`;
  }).join('');

  boxesContainer.innerHTML = boxesHTML; // Додаємо всі елементи одночасно як HTML рядок
}


function destroyBoxes() {
  boxesContainer.innerHTML = ''; 
}
