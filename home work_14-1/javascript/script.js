//Создайте функцию waitForTime, которая возвращает Promise. 
//Этот промис должен резолвиться через указанное количество миллисекунд, 
//которое нужно передавать в функцию waitForTime в качестве аргумента. 
//Если время вышло, промис резолвится с сообщением "Ожидание завершено".

//Например через секунды, 3 или 5 секунд.


//Решение:
//Часть 1

//function waitForTime(ms) {
//  return new Promise(resolve => {
//    setTimeout(() => {
//    resolve("The waiting is over");
//  }, ms);
// });
// } 

//Часть 2 

 //waitForTime(3000).then(msg => console.log(msg));


 //Вывод

 function waitForTime(ms) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("The waiting is over");
    }, ms);
  });
} waitForTime(3000).then(msg => console.log(msg));
Promise {<pending>}
The waiting is over
