//1.Создайте HTML-форму с двумя полями ввода: для логина и пароля, а также кнопкой "Войти".
//Используя JavaScript и DOM, напишите скрипт, который будет проверять, 
//совпадают ли введенные значения с заранее заданными значениями логина и пароля 
//(их нужно самому придумать и заранее указать в скрипте).
//Если значения совпадают, выведите сообщение об успешной аутентификации, 
//в противном случае - сообщение об ошибке.

const form = document.getElementById("loginForm");
const message = document.getElementById("authMessage");

//Мой логин Mira и пароль My Parol
const correctUsername = "Mira";
const correctPassword = "My Parol";

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const enteredUsername = document.getElementById("username").value;
  const enteredPassword = document.getElementById("password").value;

  if (enteredUsername === correctUsername && enteredPassword === correctPassword) {
    message.textContent = "Success!";
    message.style.color = "#4CAF50";
  } else {
    message.textContent = "Wrong login or password.";
    message.style.color = "#f44336";
  }
});

