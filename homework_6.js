// ======================================================
// 1. Используя метод map() напишите код, который получает из массива строк новый массив, содержащий их длины.
console.log("Задание 1:");

const vegetables = ["Капуста", "Репа", "Редиска", "Морковка"];

let vegetablesLength = vegetables.map((el) => {
  return el.length;
});

console.log(vegetablesLength); // 7,4,7,8

// 2.
// Имеется массив простых чисел: numbers = [2, 3, 5, 7, 11, 13, 17, 19]. Использую метод reduce() напишите функцию
//  currentSums(numbers), которая возвращает новый массив из такого же числа элементов, в котором на каждой позиции
// будет находиться сумма элементов массива numbers до этой позиции включительно.
console.log("Задание 2:");

let numbers = [2, 3, 5, 7, 11, 13, 17];

const getSumNumbers = (numbers) => {
  let result = [];
  numbers.reduce((sum, num) => {
    sum += num;
    result.push(sum);
    return sum;
  }, 0);
  return result;
};

console.log(getSumNumbers(numbers));

// [2, 2+3, 2+3+5, 2+3+5+7, 2+3+5+7+11, 2+3+5+7+11+13, 2+3+5+7+11+13+17] = [ 2,5,10,17,28,41,58]

// 3. Напишите код, который получает из массива чисел новый массив, содержащий пары чисел,
//  которые в сумме должны быть равны семи: (0:7), (1:6) и т.д.
console.log("Задание 3:");
let arr = [0, 1, 2, 3, 4, 5, 6, 7];
const getSevenSum = (arr) => {
  let result = [];
  arr.forEach((el, index) => {
    for (let i = index + 1; i < arr.length; i++) {
      if (el + arr[i] === 7) {
        result.push(`(${el}:${arr[i]})`);
      }
    }
  });
  return result;
};

console.log(getSevenSum(arr));

// 4. Перед вами переменная, содержащая строку. Напишите код, создащий массив, который будет состоять из первых букв слов строки str.
console.log("Задание 4:");

let str = "Каждый охотник желает знать, где сидит фазан.";

let firstSymbol = str.split(" ").map((el) => el[0]);

console.log(firstSymbol);
// foo(array); // [К,о,ж,з,г,с,ф]

// 5. Перед вами переменная, содержащая строку. Напишите код, создащий массив,
// который будет состоять из строк, состоящих из предыдущего, текущего и следующего символа строки str.
console.log("Задание 5:");

str = "JavaScript";

// const getThreeLetters = (str) => {
//   return str.split("").map((_, index) => {
//     if (index === 0) return str.substr(index, 2);
//     return str.substr(index - 1, 3);
//   });
// };

const getThreeLetters = (str) => {
  return str.split("").map((el, index) => {
    return (str[index - 1] || "") + el + (str[index + 1] || "");
  });
};

console.log(getThreeLetters(str));

// 6. Напишите код, преобразующий массив цифр, которые располагаются неупорядоченно,
// в массив цифр расположенных по убыванию их значений.
console.log("Задание 6:");

let numerics = [5, 7, 2, 9, 3, 1, 8];

result = numerics.sort().reverse();
// foo(numerics); // [9,8,7,5,3,2,1]

console.log(result);

// 7. Напишите код, объединяющий три массива цифр, и располагающий цифры, в полученном массиве, в порядке убывания их значений.
console.log("Задание 7:");
let a = [1, 2, 3];
let b = [4, 5, 6];
let c = [7, 8, 9];
function getArr(a, b, c) {
  return a.concat(b, c).sort().reverse();
}

console.log(getArr(a, b, c)); // [9,8,7,6,5,4,3, 2, 1]

// 8 . Дан двухмерный массив с числами, например [[1, 2, 3], [4, 5], [6]].
// Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным. Показать решение.
console.log("Задание 8:");

numbers = [[1, 2, 3], [4, 5], [6]];

let sumNumb = numbers
  .flat()
  .reduce((previousValue, item) => previousValue + item);

console.log(sumNumb);

// 9. Дан трехмерный массив с числами, например [[[1, 2], [3, 4]], [[5, 6], [7, 8]]].
// Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным.
console.log("Задание 9:");

numbers = [
  [
    [1, 2],
    [3, 4],
  ],
  [
    [5, 6],
    [7, 8],
  ],
];

sumNumb = numbers.flat(2).reduce((previousValue, item) => previousValue + item);

console.log(sumNumb);

// 10. Дан массив с числами. Не используя метода reverse переверните его элементы в обратном порядке.
console.log("Задание 10:");

arr = [0, 1, 2, 3, 4, 5, 6, 7];

const reverse = (arr) => {
  const result = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
  }
  return result;
};

console.log(reverse(arr));

// 12. Сделайте функцию arrayFill, которая будет заполнять массив заданными значениями.
// Первым параметром функция принимает значение, которым заполнять массив, а вторым - сколько элементов должно быть в массиве.
// Пример: arrayFill('x', 5) сделает массив ['x', 'x', 'x', 'x', 'x'].
console.log("Задание 12:");

let arrayFill = (item, length) => {
  let array = [];
  for (i = 0; i < length; i++) {
    array.push(item);
  }
  return array;
};

console.log(arrayFill("x", 5));

// 16. Написать функцию, которая принимает слово и возвращает true, если слово является палиндромом.
console.log("Задание 16:");

palindromeWord = (word) => {
  wordReverse = word.split("").reverse().join("");
  return word.toLowerCase() === wordReverse.toLowerCase();
};

console.log(palindromeWord("olOLO"));

// 17. Написать функцию которая будет принимать два массива, и в качестве
// результата будет возвращать только те значения которые есть и в первом и во втором массиве.
console.log("Задание 17:");

const arr17 = [2, 4, 5, 6, 1, 7];
const arr18 = [4, 6, 9, 7, 0, 3];

const getSomeValue = (arg1, arg2) => {
  const result = [];
  arg1.forEach((el) => {
    if (arg2.includes(el)) {
      result.push(el);
    }
  });
  return result;
};

console.log(getSomeValue(arr17, arr18));
