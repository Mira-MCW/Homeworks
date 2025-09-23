//Создайте массив объектов с полями "name" и "price". 
//Реализуйте функцию hasExpensiveItem, используя метод some, 
//чтобы проверить, содержит ли массив хотя бы один объект с ценой выше 50.

const items = [
  { name: "Laptop", price: 1200 },
  { name: "Smartphone", price: 800 },
  { name: "Headphones", price: 30 }
];

function hasExpensiveItem(arr) {
 return arr.some(item => item.price > 50);
}

console.log(hasExpensiveItem(items)); 

// Вывод: 
true