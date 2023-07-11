//Напишите функцию, которая выводит нечетные числа от 0 до 10

function outputOddnumbers() {
  for (let i = 1; i <= 10; i += 2) {
    console.log(i);
  }
}

outputOddnumbers();

// //Напишите функцию, которая принимает два числа в качестве диапазона и возвращает сумму чисел в указанном диапазоне

function sumNumbers(start, end) {
  let result = 0;
  for (let i = start; i <= end; i++) {
    result = result + i;
  }
  return result;
}

console.log(sumNumbers(2, 5));

//Через массив опишите трех игроков (имя, здоровье, урон)

let players = [
  ["Oleg", 100, 50],
  ["olya", 95, 20],
  ["Alexey", 80, 90],
];
console.log(players);

//Напишите функцию, которая получает массив чисел и возвращает среднее ариф. значение

function getAverageValue(array) {
  let result = 0;
  for (let i = 0; i < array.length; i++) {
    result = result + array[i];
  }
  return result / array.length;
}

function createArray(length) {
  let testArray = [];
  for (let i = 0; i < length; i++) {
    testArray[i] = +(Math.random() * 10).toFixed(0);
  }
  console.log(testArray);
  return testArray;
}

let length = +prompt("input length of array");
console.log(getAverageValue(createArray(length)));
createArray(length);
//Напишите функцию, которая конвертирует градусы из шкалы по Цельсию в градусы в шкалу по Фаренгейту

function converterGrad(celsium) {
  return celsium * 1.8 + 32;
}

let celsium = +prompt("input celsium value");
alert("in farengeit temperature is" + converterGrad(celsium));
