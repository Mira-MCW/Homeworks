//1. У вас есть блок синего цвета. При наведении на блок меняйте его цвет на красный,
//а при уходе — возвращайтесь к исходному.

const block = document.getElementById("colorBlock");

block.addEventListener("mouseover", function () {
  block.style.backgroundColor = "#bd1d1d";
});

block.addEventListener("mouseout", function () {
  block.style.backgroundColor = "#2b2b7f";
});

//2. У вас есть блок с id "colorBlock" и кнопка с id "colorButton".
//При клике на кнопку, измените цвет блока на случайный цвет. 
//Используйте Math.random() для генерации RGB-компонент.

function getRandomColor() {
  const r = Math.floor(Math.random() * 256); // от 0 до 255
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

const block2 = document.getElementById("colorBlock2");
const button = document.getElementById("colorButton");

button.addEventListener("click", function () {
  block2.style.backgroundColor = getRandomColor();
});

