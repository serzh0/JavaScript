console.log("кот" > "код");
console.log("2" + 2 * "2");
console.log(undefined == null);
console.log(undefined === null);
console.log(null == 0);
console.log(2 > "3");
console.log(null - false + true);
console.log(1 / "l");
console.log("2" * "3");
console.log(4 + 5 + "O");
console.log("l" + 4 + 5);
console.log("4" - 2);
console.log("4" - "4x");
console.log(null == false);
console.log(" -4 " / 0 + 1);
console.log(null + 1);
console.log(undefined + null);

// Мои ответы; пояснения

// 1. true;  в алфавите буква Т идёт после Д, поэтому "кот" тяжелее
// 2. 44; (ответил неправильно) Сначала идёт умножение, потом конкатенация
// 3. true;
// 4. false;
// 5. true; (ответил неправильно) по факту false, т.к по алгоритму сравнения мы не подходим к каким-либо условиям
// ( x = null, y = number), поэтому по умолчанию нам выдало false.
// 6. false 2 НЕ больше 3
// 7. 1;
// 8. 1;  (ответил неправильно) Ответ NaN. Не разглядел, что y = "l" (буква Эль на англ), думал что это 1 (единица)
// 9. 6;  2*3=6
// 10. 45O; (ответил неправильно) 4+5 = 9; 9+"O" = 9O (девять буква О)
// 11. NaN; (ответил неправильно) "l" +4 = "l4" ; "l4" + 5 = "l45"
// 12. 2;  4 - 2 = 2
// 13. NaN;  4 - 4x = NaN
// 14. false;  см. пример №5
// 15. infinity; (ответил неправильно) будет -infinity, -4 / 0 = - infinity
// 16. 1;  0 + 1 = 1
// 17. NaN;  необъявленное значение + 0 = NaN
