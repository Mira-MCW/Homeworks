//1.Создайте функцию, которая принимает два числа в качестве 
//параметров и возвращает их сумму, 
//для второго параметра определите значение по умолчанию. 
//Затем вызовите функцию и выведите результат в консоль.

function addTwoNumbers(a, b = 5) {
  return a + b;
}

let result = addTwoNumbers(10);
console.log("The sum of elements:", result);

//Вывод:

The sum of elements: 15

//2.Создайте массив numbers с несколькими числами.
//Напишите функцию calculateSum, которая принимает массив и 
//возвращает сумму всех его элементов, не используя методы массивов.

let numbers = [4, 7, 2, 9, 5];

function calculateSum(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]; 
  }

  return sum;
}

let total = calculateSum(numbers);
console.log("The sum of all numbers", total);

//Вывод:

The sum of all numbers 27

//3.Создайте массив students с объектами студентов (имя, возраст, курс).
//Напишите функцию displayStudentInfo, которая принимает студента и 
//выводит его информацию в консоль.

let students = [
  { name: "Alex", age: 35, course: "UX/UI" },
  { name: "Mira", age: 45, course: "Frontend" },
  { name: "Nick", age: 42, course: "Backend" }
];

function displayStudentInfo(student) {
  console.log("Name:", student.name);
  console.log("Age:", student.age);
  console.log("Course:", student.course);
  console.log("...");
}

for (let i = 0; i < students.length; i++) {
  displayStudentInfo(students[i]);
}

//Вывод:

Name: Alex
Age: 35
Course: UX/UI
...
Name: Mira
Age: 45
Course: Frontend
...
Name: Nick
Age: 42
Course: Backend
...