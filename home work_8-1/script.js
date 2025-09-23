//1.Создайте функцию, которая принимает массив чисел в качестве параметра
//и возвращает произведение всех элементов массива. 
//Затем вызовите функцию и выведите результат в консоль.

function multiplyArrayElements(arr) {
  let product = 1;

  for (let i = 0; i < arr.length; i++) {
    product *= arr[i];
  }

  return product;
}

let numbers = [2, 3, 4];
let result = multiplyArrayElements(numbers);
console.log("The prouduct of all numbers in the array:", result);

//Вывод:

The prouduct of all numbers in the array: 24

//2.Сумма элементов массива: Создайте массив чисел. 
//Напишите код, который использует цикл while для 
//подсчета суммы всех элементов массива.

let numbers = [5, 8, 12, 3];
let sum = 0;
let i = 0;

while (i < numbers.length) {
  sum += numbers[i]; 
  i++; 
}

console.log("The sum of all numbers in the array:", sum);

//Вывод:

The sum of all numbers in the array: 28