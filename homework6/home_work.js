let number2 = +prompt("Первое зазадание: введдите стоисть товара");

let messages = [];

messages.push("Цена со скидкой 10% $  " + (number2 / 100) * 90);
messages.push("Цена с наценкой 10% $  " + (number2 / 100) * 110);
messages.push("Цена со скидкой 25% $  " + (number2 / 100) * 75);
messages.push("Цена с наценкой 25% $  " + (number2 / 100) * 125);
messages.push("Цена со скидкой 1% $  " + (number2 / 100) * 99);
messages.push("Цена со скидкой 1.5% $  " + (number2 / 100) * 98.5);

let combinedMessage = messages.join("\n");

alert(combinedMessage);

let order_cost = +prompt("Второе задание: ведите стоимость товара: ");

if (order_cost >= 100) {
  alert((order_cost / 100) * 95);
}
if (order_cost < 100) {
  alert(order_cost);
}

let number = +prompt("Третье задание: ведите любое число");

if (number > 0) {
  alert("Ваше число больше 0");
} else if (number < 0) {
  alert("Ваше число меньше 0");
} else if ((number) => 0) {
  alert("Ваше число 0");
}

let number1 = +prompt("Четвертое задание ведите число:");

let result = number1 % 10;
{
  alert("Последняя цифра  " + result);
}