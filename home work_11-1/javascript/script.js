//Создайте HTML-страницу с кнопкой "Кликни меня" и блоком, 
//в котором будет отображаться количество кликов.

//Используя JavaScript, при клике на кнопку увеличивайте счетчик кликов 
//и изменяйте цвет фона блока. Если количество кликов делится на 5 без остатка, 
//цвет фона должен изменяться на случайный цвет.

//При достижении 10 кликов выведите сообщение под блоком с количеством кликов: 
//"Поздравляем! Вы достигли 10 кликов!".

let count = 0;

const button = document.getElementById("clickButton");
const block = document.getElementById("clickBlock");
const message = document.getElementById("message");

function getRandomColor1() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

button.addEventListener("click", function () {
  count++;
  block.textContent = `You have made: ${count} clicks`;

  if (count % 5 === 0) {
    block.style.backgroundColor = getRandomColor1();
  }

  if (count === 10) {
    message.textContent = "Congratulations! You reached 10 clicks!";
  }
});