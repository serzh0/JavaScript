// const user = {
//   name: "Serzh",
//   age: 24,
//   "some property": 123,
// };
// user.town = "Nizhny Novgorod";

// console.log(user["some property"]);

// "name", "age", "city";

// const request = (field, value) => {
//   // запрос на сервер
//   const filter = {
//     [field]: value,
//   };
//   return filter;
// };

// const userList = request("name", "Serzh");
// const userList2 = request("age", "25");

// console.log(userList, userList2);

// const firstName = "Serzh";
// const age = 2021 - 1997;
// const user = {
//   age,
//   name: {
//     firstName,
//   },
//   sayName() {
//     console.log(user.name.firstName);
//   },
// };

// user.sayName();

// Создайте объект myFavoriteFilm, описывающий ваш любимый фильм.
// 1.Объект должен содержать свойства с названием фильма, с датой выпуска, именем режиссера и страной выпуска.
// 2.Добавить свойство содержащее значение выручки фильма в прокате.
// 3.Добавить метод, который который будет выводить название фильма в консоль.
// 4.Удалить свойство содержащее год выпуска.
// 5.Вывести в консоль объект myFavoriteFilm и проанализировать его структуру.

// const myFavoriteFilm = {
//   title: "Joker",
//   releaseDate: "03.10.2019",
//   director: "Todd Phillips",
//   country: "USA",
// };
// myFavoriteFilm.revenue = "$335 451 311"; // 2.

// myFavoriteFilm.filmName = () => {
//   console.log(myFavoriteFilm.title); // 3.
// };

// delete myFavoriteFilm.releaseDate; // 4.

// console.log(myFavoriteFilm); // 5.

// let str = "Hello World".length;

// let str2 = new String("value").length;
// console.log(str);
// console.log(str2);

// let num1 = 1;

// let num2 = 2;

// console.log(num1.toString() + num2);
// // console.log(new Number(num1).toString() + num2); // подразумевается это

// // console.log(str);
// // console.log(str2);

// console.log(4100000000 == 4.1e9); // true

// const num = 1.3445;

// console.log(typeof +num.toFixed(1));

// let a = "Hello, motherfucker!";

// console.log(isNaN(a)); //true

// let sum = 0.1 + 0.2;

// console.log(+sum.toFixed(2));

// console.log(`Serzh`[4]);

// let str = "Hello";

// str = str + " world";

// console.log(str);

// const str = "hello world";

// const index = str.indexOf("w", 7);

// console.log(index);

// const str = "hello world";

// // const index = str.indexOf("o", 7);

// // console.log(index);

// // console.log(str.slice(0, 4));
// // console.log(str.substr(4, 4));
// console.log(str.substring(0, 4));

// let someFunc = (str, n) => str[n] === str[n].toUpperCase();

// console.log(someFunc("Hello", 1));

// let str = "+7(903)-123-45-67";

// let regexp = /\d/g;

// console.log(str.match(regexp)); // массив совпадений: 7,9,0,3,1,2,3,4,5,6,7

// // и можно сделать из них уже чисто цифровой номер телефона
// console.log(str.match(regexp).join(" ")); // 79035419441

// 04.12.2021

// const arr = [1, 3, "sd", { name: "Serzh" }, 3];
// let arr1 = new Array(3);
// console.log(Array.isArray(arr1));

// const arr = ["1 элемент", "2 элемент", "3 элемент"];

// const obj = {};
// console.log(arr);

// arr[1] = "изменение";
// console.log(arr);

// let matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
// ];

// console.log(matrix[1][2]);

// const arr = [1, 2, 3, 4, 5];

// const newLengh = arr.push(9);

// const deleteElement = arr.pop();

// console.log(arr, deleteElement);

// let matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
// ];

// const simpleArr = matrix.flat(1);
// console.log(simpleArr);

// const arr = [1, 2, 3, 4, 5];

// for (let value of arr) {
//   console.log(value);
// }

// const arr = ["Яблоко", "Банан", "Апельсин", "Мандарин"];

// const index = arr.indexOf("Мандарин");
// // console.log(index);
// // console.log(arr[index]);
// console.log(arr.includes("Яблоки"));
// const arr = ["Яблоко", "Банан", "Апельсин", "Мандарин"];
// const arr = [
//   { name: "Serzh", age: 24 },
//   { name: "Andrey", age: 27 },
//   { name: "Vladimir", age: 30 },
// ];

// const foundElement = arr.find((el, index) => {
//   console.log(el, index);
//   return el.age === 24;
// });
// console.log("foundElement)", foundElement);

// const users = [
//   { name: "Serzh", age: 24 },
//   { name: "Andrey", age: 27 },
//   { name: "Vladimir", age: 30 },
//   { name: "Iliya", age: 20 },
// ];
// console.log(users);

// const filterUsers = users.filter((el) => el.age > 21);

// console.log(filterUsers);

// const numbers = [1, 2, 3, 4, 5, 6];
// numbers.forEach((el) => {
//   console.log(el);
// });

// const numbers = [1, 2, 3, 4, 5, 6];

// const incrementNumbers = numbers.map((el) => el + 1);

// console.log(incrementNumbers);

// const numbers = [1, 2, 3, 4, 5, 6];

// const sum = numbers.reduce(
//   (prevValue, currentElement) => prevValue + currentElement,
//   0
// );
// console.log(sum);

// ==========================
// 1.Написать функцию, которая будет принимать массив чисел, содержащий целые
// положительные и целые отрицательные числа, в качестве результата возвращать
// сумму четных положительных элементов переданного массива.

// const numbers = [1, 6, 0, -6, -7, 1, -3, 8, 9];

// const getEvenSum = (arr) => {
//   let result = 0;
//   arr.forEach((el) => {
//     if (el % 2 === 0 && el > 0) {
//       result += el;
//     }
//   });
//   return result;
// };

// console.log(getEvenSum(nubmers));

// const getEvenSum = (arr) => {
//   return arr.reduce((sum, el) => {
//     if (el % 2 === 0 && el > 0) {
//       return sum + el;
//     }
//     return sum;
//   }, 0);
// };

// console.log(getEvenSum(numbers));

// 2.Написать функцию, которая будет принимать массив чисел, и будет убирать повторяющиеся
// значения из переданного массива, в качестве результата возвращать новый массив с
// уникальными значениями из исходного.

// const numbers = [1, 6, 0, -6, -7, 1, 7, 8, 9];

// const deleteDublicate = (arr) => {
//   let result = [];
//   for (let value of arr) {
//     if (!result.inccludes(value)) {
//       result.push(value);
//     }
//   }
//   return result;
// };

// console.log(deleteDublicate(numbers));

// 3.Написать функцию  которая будет принимать два массива, и будет сравнивать их, если они
// идентичны (элементы совпадают по значению и по индексу) то функция возвращает true,
// в противном случае false.

// const numbers = [1, 3, 5];

// const numbers2 = [1, 2, 5];

// const compare = (arr1, arr2) => {
//   if (arr1.length !== arr2.length) return false;
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] !== arr2[i]) {
//       return false;
//     }
//   }
//   return true;
// };

// console.log(compare(numbers, numbers2));

// const compare = (arr1, arr2) => {
//   return arr1.toString() === arr2.toString();
// };
