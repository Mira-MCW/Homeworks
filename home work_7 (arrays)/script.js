//1. Создайте массив чисел и выведите значения массива в консоль. (Используйте цикл).

let numbers = [3, 7, 12, 5, 9];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// Вывод:
3
7
12
5
9

//2. Создайте массив произвольных чисел(от 2 до 24) и выведите все числа, которые меньше 20, но больше 8. 
//(Используйте цикл).
// const arr = [4, 2, 8, 6, 12, 5, 21, 24, 20, 22, 8, 7, 6, 9]

const arr = [4, 2, 8, 6, 12, 5, 21, 24, 20, 22, 8, 7, 6, 9];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] < 20 && arr[i] > 8) {
    console.log(arr[i]);
  }
}

// Вывод:

12
9

//3. Создайте массив чисел и найдите минимальное значение.

let number = [15, 3, 27, 8, 2, 19];

let min = number[0]; 

for (let i = 1; i < number.length; i++) {
  if (number[i] < min) {
    min = number[i]; 
  }
}

console.log("Minimum value", min);

// Вывод:

Minimum value 2

//4. Создайте массив чисел и обновите значение элемента по индексу.  

let numbers = [10, 20, 30, 40, 50];

numbers[2] = 99;

console.log(numbers);

// Вывод:


(5) [10, 20, 99, 40, 50]
0
: 
10
1
: 
20
2
: 
99
3
: 
40
4
: 
50
length
: 
5


//5. Создайте массив слов. Найдите самое длинное слово в массиве. 
//(У строк, также как и у массивов, есть свойство length, которое измеряет длину строки).

let words = ["Apple", "Banana", "Orange", "Pomegranate", "Pineapple"];

let longest = words[0];

for (let i = 1; i < words.length; i++) {
  if (words[i].length > longest.length) {
    longest = words[i]; 
  }
}

console.log("The longest word is", longest);

// Вывод:

The longest word is Pomegranate