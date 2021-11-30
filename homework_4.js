// ================================================================================
// 1.Сделайте функцию, которая возвращает квадрат числа. Число передается параметром.
console.log("Задание 1:");

function someFunc(a) {
  return a ** 2;
}
console.log(someFunc(8));

//  2. Сделайте функцию, которая возвращает сумму двух чисел.
console.log("Задание 2:");

function someFunc1(a, b) {
  return a + b;
}
console.log(someFunc1(4, 2));

//  3. Сделайте функцию, которая отнимает от первого числа второе и делит на третье.
console.log("Задание 3:");

function someFunc2(a, b, c) {
  return (a - b) / c;
}
console.log(someFunc2(10, 4, 2));

// 4. Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке.
console.log("Задание 4:");

function someFunc3(num) {
  switch (num) {
    case 1:
      return "Понедельник";
    case 2:
      return "Вторник";
    case 3:
      return "Среда";
    case 4:
      return "Четверг";
    case 5:
      return "Пятница";
    case 6:
      return "Суббота";
    case 7:
      return "Воскресенье";
  }
}
console.log(someFunc3(5));

// ____________________________________
function someFunc4(num) {
  if (num === 1) {
    return "Понедельник";
  } else if (num === 2) {
    return "Вторник";
  } else if (num === 3) {
    return "Среда";
  } else if (num === 4) {
    return "Четверг";
  } else if (num === 5) {
    return "Пятница";
  } else if (num === 6) {
    return "Суббота";
  } else if (num === 7) {
    return "Воскресенье";
  }
}
console.log(someFunc4(3));

//  5.Сделайте функцию, которая параметрами принимает 2 числа. Если эти числа равны -
// пусть функция вернет true, а если не равны - false.
console.log("Задание 5:");

function someFunc5(num1, num2) {
  return num1 === num2;
}
console.log(someFunc5(2, 2));

// ____________________________________
let someFunc6 = (a, b) => a === b;
console.log(someFunc6(6, 7));

// 6.  Сделайте функцию, которая параметрами принимает 2 числа. Если их сумма
// больше 10 - пусть вернет true, а если нет то - false.
console.log("Задание 6:");

function someFunc7(num1, num2) {
  return num1 + num2 > 10;
}
console.log(someFunc7(5, 6));
// ____________________________________

let someFunc8 = (num1, num2) => num1 + num2 > 10;
console.log(someFunc8(5, 5));

// 7.  Сделайте функцию, которая параметром принимает число и проверяет - отрицательное оно или нет.
// Если отрицательное - пусть функция вернет true, а если нет - false.
console.log("Задание 7:");

let someFunc9 = (num1) => !(num1 >= 0);
console.log(someFunc9(-1));

// 8. Сделайте функцию isNumberInRange, которая параметром принимает число и проверяет,
// что оно больше нуля и меньше 10. Если это так - пусть функция возвращает true, если не так - false.
console.log("Задание 8:");

let isNumberInRange = (num1) => num1 > 0 && num1 < 10;
console.log(isNumberInRange(1));

// 9. Создайте функцию rgb(), которая будет принимать три числовых аргумента и возвращать строку вида «rgb(23,100,134)».
// Если аргументы не заданы, считать их равными нулю. Не проверять переменные на тип данных
console.log("Задание 9:");

function rgb(red = 0, green = 0, blue = 0) {
  return `rgb(${red},${green},${blue})`;
}
console.log(rgb());
// ____________________________________
let rgb1 = (red = 0, green = 0, blue = 0) => `rgb(${red},${green},${blue})`;
console.log(rgb1(23, 100, 134));

// 10. Написать функцию, которая принимает в себя три параметра - число и две функции.
//  Первая переданная функция  возвращает возведенное в квадрат переданное число и будет вызываться,
// если число четное. Вторая переданная коллбэк-функция будет вызываться с переданным в нее числом ,
// если число нечетное, и будет возвращать число, увеличенное на 1.

console.log("Задание 10:");

function someFunc10(num1, callback1, callback2) {
  if (num1 % 2 === 0) {
    return callback1(num1);
  } else {
    return callback2(num1);
  }
}
let func1 = (num1) => num1 ** 2;
let func2 = (num1) => num1 + 1;

console.log(someFunc10(2, func1, func2));
// 11. Написать функцию mult(num1, num2 , num3) принимающую 3 числа. Функцию перемножает num1 и num2 столько раз,
// сколько указано в третьем аргументе num3. Значения num1 и num2 по умолчанию 1,  num3 по умолчанию 2
console.log("Задание 11:");

let mult = (num1 = 1, num2 = 1, num3 = 2) => {
  for (i = 0; i < num3; i++) {
    num1 = num1 * num2;
  }
  return num1;
};

console.log(mult(4, 4, 2));

// 12. Написать функцию, которая принимает 3 аргумента(каждый аргумент - 1 слово) и возвращает строку с этими 3 словами,
// расположенными в алфавитном порядке.
console.log("Задание 12:");

let someFunc11 = (word1, word2, word3) => {
  let arrayFunc = [word1, word2, word3];
  arrayFunc = arrayFunc.sort();
  arrayFunc = arrayFunc.join();
  return arrayFunc;
};
console.log(someFunc11("b", "c", "a"));

// 16. Сделайте функцию isEven() (even - это четный), которая параметром принимает целое число и проверяет: четное оно или нет.
// Если четное - пусть функция возвращает true, если нечетное - false.
console.log("Задание 16:");

let isEven = (num1) => num1 % 2 === 0;
console.log(isEven(2));
