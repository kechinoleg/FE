console.log("Task1");
function fizzBuzz() {
    for (let i = 1; i <= 100; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
      } else if (i % 3 === 0) {
        console.log("Fizz");
      } else if (i % 5 === 0) {
        console.log("Buzz");
      } else {
        console.log(i);
      }
    }
  }
 fizzBuzz();



console.log("Task2");
let bookObject = {
  name: "Kobzar",
  autor: "Schevchenko",
  year: 1840,
};

let bookObject2 = {
    name: "Haydamaki",
    autor: "Schevchenko",
    year: 1841,
}

let bookObject3 = {
    name: "Count of Montecristo",
    autor: "Duma",
    year: 1846
}

    console.log(bookObject);
    console.log(bookObject2);
    console.log(bookObject3);



console.log("Task3");
function summNumbers() {
    let result = 0;
    for (let i = 1; i <= 100; i++){
        result += i;
    }
    return result;
}
console.log(summNumbers());



console.log("Task4");
let human = {
    name: "Oleg",
    age: 44,
    gender: "male",
    };
console.log(human);



console.log("Task 5")
function findMaxNumber(arr) {
    if (!Array.isArray(arr)) {
      throw new Error('Input is not an array');
    }
    if (arr.length === 0) {
      throw new Error('Array is empty');
    }
    let maxNumber = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > maxNumber) {
        maxNumber = arr[i];
      }
    }
    return maxNumber;
  }
  const numbers1 = [5, 2, 9, 1, 5, 6];
  const maxNumber = findMaxNumber(numbers1);
  console.log('Наибольшее число:', maxNumber);



console.log("Task 6");
const students = [
    {
      имя: "Александр",
      возраст: 20,
      оценка: 85
    },
    {
      имя: "Екатерина",
      возраст: 22,
      оценка: 78
    },
    {
      имя: "Иван",
      возраст: 19,
      оценка: 95
    },
    {
      имя: "Мария",
      возраст: 21,
      оценка: 91
    }
  ];
  students.forEach((student, index) => {
    console.log(`Студент ${index + 1}:`);
    console.log(`Имя: ${student.имя}`);
    console.log(`Возраст: ${student.возраст}`);
    console.log(`Оценка: ${student.оценка}`);
    console.log("------------------------");
  });
  


console.log("Task 7");
function findAverage(arr) {
    if (!Array.isArray(arr)) {
      throw new Error('Input is not an array');
    }  
    if (arr.length === 0) {
      throw new Error('Array is empty');
    }
    const sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    const average = sum / arr.length;
    return average;
  }
  const numbers = [5, 17, 19, 98, 5, 76];
  const averageValue = findAverage(numbers);
  console.log('Среднее значение:', averageValue); 
  