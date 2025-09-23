//1. Создайте массив объектов с полями "название" и "год". 
//Напишите функцию, используя метод sort, чтобы отсортировать объекты 
//по году от самого старого к самому новому.

const movies = [
{ title: "Inception", year: 2010 },
{ title: "The Dark Knight", year: 2008 },
{ title: "Interstellar", year: 2014 },
{ title: "The Matrix", year: 1999 }
];


//


const movies = [
  { title: "Inception", year: 2010 },
  { title: "The Dark Knight", year: 2008 },
  { title: "Interstellar", year: 2014 },
  { title: "The Matrix", year: 1999 }
];

function sortByYear(arr) {
  return arr.sort((a, b) => a.year - b.year);
}

const sortedMovies = sortByYear(movies);
console.log(sortedMovies);


// Вывод:

0
: 
{title: 'The Matrix', year: 1999}
1
: 
{title: 'The Dark Knight', year: 2008}
2
: 
{title: 'Inception', year: 2010}
3
: 
{title: 'Interstellar', year: 2014}
length
: 
4


//2. Создайте массив объектов с полями "имя" и "возраст". 
//Напишите функцию, используя метод reduce, чтобы объединить 
//все имена в одну строку через запятую.

const people = [
{ name: "Alice", age: 25 },
{ name: "Bob", age: 30 },
{ name: "Charlie", age: 22 }
];

//


const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 22 }
];

function joinNames(arr) {
  return arr.reduce((acc, person, index) => {
    return index === 0 ? person.name : acc + ", " + person.name;
  }, "");
}

const namesString = joinNames(people);
console.log(namesString);

// Вывод: 


Alice, Bob, Charlie

