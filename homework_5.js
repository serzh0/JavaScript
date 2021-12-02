// ====================================================

// 1. Удаление указанного количества символов из строки
// Напишите функцию delete_characters(str, length), которая возвращает подстроку, состоящую из указанного количества символов.
console.log("Задание 1:");

let str = "Каждый охотник желает знать";
function delete_characters(str, length) {
  return str.substr(0, length);
}
console.log(delete_characters(str, 14));

// 2. Вставить тире между словами строки
// Напишите функцию insert_dash(str), которая принимает строку str в качестве аргумента и вставляет тире (-) между словами.
//  При этом все символы строки необходимо перевести в верхний регистр.
console.log("Задание 2:");

let str1 = "HTML JavaScript PHP";

function insert_dash(str1) {
  return str1.toUpperCase().split(" ").join("-");
}

console.log(insert_dash(str1));

// 3. Сделать первую букву строки прописной
// Напишите функцию, которая принимает строку в качестве аргумента и преобразует регистр первого символа строки
// из нижнего регистра в верхний.
console.log("Задание 3:");

let str2 = "string not starting with capital";

function cursive_letter(str2) {
  return str2[0].toUpperCase() + str2.slice(1, str2.length);
}
console.log(cursive_letter(str2));

// 4. Первая буква каждого слова заглавная
// Напишите функцию capitalize(str), которая возвращает строку, в которой каждое слово начинается с заглавной буквы.

console.log("Задание 4:");

let str3 = "каждый охотник желает знать";

function capitalize(str3) {
  return str3
    .split(" ")
    .map((item) => item[0].toUpperCase() + item.slice(1, item.length))
    .join(" ");
}
console.log(capitalize(str3));

// 5. Смена регистра символов строки
// Напишите функцию change_register(str), которая принимает в качестве аргумента строку и и заменяет регистр каждого
// символа на противоположный. Например, если вводится «КаЖдЫй ОхОтНиК», то на выходе должно быть «кАжДыЙ оХоТнИк».
console.log("Задание 5:");

let str4 = "КаЖдЫй ОхОтНиК жЕлАеТ зНаТь";

function change_register(str4) {
  let newStr = "";
  for (let i = 0; i < str4.length; i++) {
    if (str4[i] === str4[i].toUpperCase()) {
      newStr += str4[i].toLowerCase();
    } else {
      newStr += str4[i].toUpperCase();
    }
  }
  return newStr;
}
console.log(change_register(str4));

// 6. Удалить все не буквенно-цифровые символы
// Напишите функцию remove_char(str), которая возвращает строку, очищенную от всех не буквенно-цифровых символов.
console.log("Задание 6:"); // работает только с латинскими буквами

let str5 = "every., -/ hunter #! wishes ;: {} to $ % ^ & * know";

function remove_char(str5) {
  return str5.replace(/[^\w\s\d]/g, "");
}

console.log(remove_char(str5));

// 7. Нулевое заполнение строки
// Напишите функцию zeros(num, len), которая дополняет нулями до указаной длины числовое значение с дополнительным знаком «+»
// или «-» в зависимости от передаваемого аргумента.
console.log("Задание 7:");

function zeros(num, len, sign) {
  return `${sign}${"0".repeat(len)}${num}`;
}

console.log(zeros(2, 4, "+"));

// 8. Сравнение строк без учёта регистра
// Напишите функцию comparison(str1, str2), которая сравнивает строки без учёта регистра символов.
console.log("Задание 8:");

// function comparison(str1, str2) {
//   str1 = str1.toLowerCase();
//   str2 = str2.toLowerCase();
//   return str1 === str2;
// }

// console.log(comparison("Привет", "привет"));

function comparison(str1, str2) {
  return str1.toLowerCase() === str2.toLowerCase();
}

console.log(comparison("Привет", "привет"));

// 9. Поиск без учета регистра
// Напишите функцию insensitive_search(str1, str2), которая осуществляет поиск подстроки str2 в строке str1
//  без учёта регистра символов.
console.log("Задание 9:");

function insensitive_search(str1, str2) {
  return str1.toLowerCase().includes(str2.toLowerCase());
}

console.log(insensitive_search("Добрый вечер", "ДОБРЫЙ"));

// 10. ВерблюжийРегистр (CamelCase)
// Напишите функцию initCap(str), которая преобразует стиль написания составных слов строки в CamelCase,
// при котором несколько слов пишутся слитно без пробелов, при этом каждое слово внутри строки пишется с заглавной буквы.
console.log("Задание 10:");

str = "hEllo world";
function initCap(str) {
  return str
    .split(" ")
    .map(
      (item) => item[0].toUpperCase() + item.slice(1, item.length).toLowerCase()
    )
    .join("");
}

console.log(initCap(str));

// 11. Змеиный_регистр (snake_case)
// Напишите функцию initSnake(str), которая преобразует стиль написания составных слов строки из CamelCase в snake_case,
// при котором несколько слов разделяются символом подчеркивания (_), причём каждое слово пишется с маленькой буквы.
console.log("Задание 11:");

str = "HelloWorld";

// function initSnake(str) {}

// console.log(initSnake(str));

// 12. Повторить строку n раз
// Напишите функцию repeatStr(str, n), которая вовращает строку повторяемую определённое количество раз.
console.log("Задание 12:");

function repeatStr(str, n) {
  return `${str.repeat(n)}`;
}
console.log(repeatStr(str, 4));

// 13. Получить имя файла
// Напишите функцию path(pathname), которая вовращает имя файла (подстрока после последнего символа "\" ) из полного пути к файлу.
console.log("Задание 13:");

let pathname = "/home/user/dir/file.txt";

function path(pathname) {
  return pathname.slice(pathname.lastIndexOf("/") + 1, pathname.length);
}

console.log(path(pathname));

// 14. Заканчивается ли строка символами другой строки
// Создайте метод объекта String endsWith(), который сравнивает подстроку str1 с окончанием исходной строки str и
// определяет заканчивается ли строка символами подстроки.
console.log("Задание 14:");

str = "Каждый охотник желает знать";
str1 = "скрипт";
str2 = "знать";

String.endsWith = function (substring) {
  return str.endsWith(substring);
};

console.log(String.endsWith(str2));

// 15. Подстрока до/после указанного символа
// Напишите функцию getSubstr(str, char, pos), которая возвращает часть строки,
//расположенную после или до указанного символа char(символ) в зависимости от параметра pos(до/после).
console.log("Задание 15:");

str = "Астрономия — Наука о небесных телах";

function getSubstr(str, char, pos) {
  if (pos === "До") {
    return str.slice(0, str.indexOf(char));
  } else if (pos === "После") {
    return str.slice(str.indexOf(char) + 1, str.length);
  }
}
console.log(getSubstr(str, "Н", "После"));

// 16. Вставить подстроку в указанную позицию строки
// Напишите функцию insert(str, substr, pos), которая вставляет подстроку substr в указханную позицию pos(indexOf(pos,0)) строки str.
//  По умолчанию подстрока вставляется в начало строки.
console.log("Задание 16:");

str = "Hello world";
substr = "perfect";
function insert(str, substr, pos = 0) {
  return str.slice(0, pos) + substr + str.slice(pos, str.length);
}
console.log(insert(str, substr, 6));
