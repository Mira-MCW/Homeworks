//1.Создайте объект, представляющий человека, с полями "имя" и "возраст". 
//Выведите информацию о человеке в консоль.

let person = {
  name: "Mira",
  age: "20+"
};

console.log("Name:", person.name);
console.log("Age:", person.age);

// Вывод:

Name: Mira
Age: 20+

//2.Создайте массив объектов книг(с полями "название" и "автор") и 
//выведите информацию о каждой книге в консоль

let books = [
  { title: "Gone with the Wind", author: "Margaret Mitchell" },
  { title: "Trilogy of Desire", author: "Theodore Dreiser" },
  { title: "The Alchemist", author: "Paulo Coelho" }
];

for (let i = 0; i < books.length; i++) {
  console.log("Book:", books[i].title, "| Author:", books[i].author);
}

// Вывод:

Book: Gone with the Wind | Author: Margaret Mitchell
Book: Trilogy of Desire | Author: Theodore Dreiser
Book: The Alchemist | Author: Paulo Coelho


//3.Дан объект, который олицетворяет собой прямоугольник и 
//длины его сторон const rectangle = { a: 10, b: 35 }.
//Добавьте в этот объект ключи s  и p, в s должна быть 
//вычислена площадь прямоугольника, а в p его периметр.

const rectangle = {
  a: 10,
  b: 35
};

rectangle.s = rectangle.a * rectangle.b;
rectangle.p = 2 * (rectangle.a + rectangle.b);

console.log("The area of a rectangle:", rectangle.s);
console.log("The perimeter of a rectangle:", rectangle.p);

// Вывод:

The area of a rectangle: 350
The perimeter of a rectangle: 90


//4.Создайте массив объектов, представляющих различные фрукты. 
//Используйте цикл для фильтрации только тех фруктов, 
//которые имеют цвет "красный", и выведите их в консоль.

let fruits = [
  { name: "Apple", color: "red" },
  { name: "Banana", color: "yeloow" },
  { name: "Cherry", color: "red" },
  { name: "Kiwi", color: "green" }
];

for (let i = 0; i < fruits.length; i++) {
  if (fruits[i].color === "red") {
    console.log("Red fruits are:", fruits[i].name);
  }
}

// Вывод:

Red fruits are: Apple
Red fruits are: Cherry

//5.Создайте объект `playlist` с песнями в виде массива объектов.
//Выведите информацию о каждой песне в консоль.

let playlist = {
  name: "My Favorite Songs",
  songs: [
    { title: "On a beach", artist: "Chris Rea" },
    { title: "When you came into my life", artist: "Scorpions" },
    { title: "Still got the blues", artist: "Garry Moor" }
  ]
};

for (let i = 0; i < playlist.songs.length; i++) {
  console.log("Song:", playlist.songs[i].title, ";", "Singer:", playlist.songs[i].artist);
}


// Вывод:

Song: On a beach ; Singer: Chris Rea
Song: When you came into my life ; Singer: Scorpions
Song: Still got the blues ; Singer: Garry Moor