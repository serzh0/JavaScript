// function getSum(a, b = 0) {
//   console.log(a, b);
// }

// getSum();

// function getName() {
//   return "Сергей";
// }

// function sayHi(text, name = getName()) {
//   console.log(`${text} ${name}`);
// }

// sayHi("Привет,", getName());

// let name = "Ivan";

// function sayHi(text = "Hi") {
//   // name = "Petr";
//   console.log(`${text} ${name}`);
// }

// sayHi();

// function getName() {
//   return "Sergey";
// }

// function sayHello(userName = "Гость") {
//   alert(`Приветствую,  ${userName}`);
// }

// sayHello("Serzh");

// function pow(num, n = 1) {
//   return num ** n;
// }
// console.log(pow(5, 2));

// function repeat(str, n = 2) {
//   return str.repeat(n);
// }

// console.log(repeat("Строка", 3));

// function showMessage(message, onOkHandler, onCancelHandler) {
//   let answer = confirm(message);
//   if (answer) {
//     onOkHandler;
//   } else {
//     onCancelHandler;
//   }
// }

// showMessage(
//   "Вы из Нижнего Новгорода?",
//   function () {
//     alert("Выбирайте товары");
//   },
//   function () {
//     alert("Выберите свой город");
//   }
// );
// showMessage(
//   "Вам есть 18 лет?",
//   function () {
//     alert("Добро пожаловать!");
//   },
//   function () {
//     alert("Извините, вам доступ запрещён.");
//   }
// );

// someFunc();
// function someFunc() {
//   console.log("Функция отработала");
// }

// let someFunc = function () {
//   console.log("Функция отработала");
// };

// someFunc(4, 4);

// function someFunc(a, b) {
//   if (a === b) {
//     return true;
//   } else {
//     false;
//   }
// }

// const isEqual = (a, b) => a === b;

// function someFunc(number) {
//   if (number === 1) {
//     return "Понедельник";
//   } else if (number === 2) {
//     return "Вторник";
//   } else if (number === 3) {
//     return "Среда";
//   } else if (number === 4) {
//     return "Четверг";
//   } else if (number === 5) {
//     return "Пятница";
//   } else if (number === 6) {
//     return "Суббота";
//   } else if (number === 7) {
//     return "Воскресенье";
//   }
// }

// // console.log(someFunc(1));

// function someFunc(number) {
//   switch (number) {
//     case 1: {
//       return "Понедельник";
//     }
//     case 2: {
//       return "Вторник";
//     }
//     case 3: {
//       return "Среда";
//     }
//     case 4: {
//       return "Четверг";
//     }
//     case 5: {
//       return "Пятница";
//     }
//     case 6: {
//       return "Суббота";
//     }
//     case 7: {
//       return "Воскресенье";
//     }
//   }
// }

// console.log(someFunc(7));

// function getFibonacciNumber(n) {
//   let el1 = 0; // n-2
//   let el2 = 1; // n-1

//   for (let i = 2; i < n; i++) {
//     let sumPrev = el1 + el2;
//     el1 = el2;
//     el2 = sumPrev;
//   }
//   return el2;
// }

// console.log(getFibonacciNumber(7));
