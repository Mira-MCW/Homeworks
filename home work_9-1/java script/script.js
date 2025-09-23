//У вас есть список на веб-странице с элементами <li>. При загрузке страницы проверьте, 
//есть ли у списка определенное количество элементов, например, больше трех. 
//Если условие выполняется, создайте новый элемент и замените последний элемент списка на новый.

const list = document.getElementById("My Wish List");

const items = list.getElementsByTagName("li");

if (items.length > 3) {
  const newItem = document.createElement("li");
  newItem.textContent = "New Wish";

  list.replaceChild(newItem, items[items.length - 1]);
}