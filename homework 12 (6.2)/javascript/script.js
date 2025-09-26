// Задание 1: Оценка по баллам
let score = 75;

if (score >= 90) {
  console.log('Оценка: A');
} else if (score >= 80) {
  console.log('Оценка: B');
} else if (score >= 70) {
  console.log('Оценка: C');
} else if (score >= 60) {
  console.log('Оценка: D');
} else {
  console.log('Оценка: F');
}

// Вывод:

// Оценка: C



// Задание 2: День недели
let dayOfWeek = 3; 

switch (dayOfWeek) {
  case 1:
    console.log("Сегодня: Понедельник");
    break;
  case 2:
    console.log("Сегодня: Вторник");
    break;
  case 3:
    console.log("Сегодня: Среда");
    break;
  case 4:
    console.log("Сегодня: Четверг");
    break;
  case 5:
    console.log("Сегодня: Пятница");
    break;
  case 6:
    console.log("Сегодня: Суббота");
    break;
  case 7:
    console.log("Сегодня: Воскресенье");
    break;
  default:
    console.log("Некорректный номер дня");
}

//Вывод:

// Сегодня: Среда