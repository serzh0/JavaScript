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
