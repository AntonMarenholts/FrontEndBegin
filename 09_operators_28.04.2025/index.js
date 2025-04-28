'use strict'

// number, string, bigint, boolean, symbol, undefined, null
// Object

const x = 10;

let y, z;
y = 12;

let b = 13;
console.log(b);

//===========================Operators===================================

// operator, operand
// a + b - binary operator
// !a - унарные операторы
// a ? b : c; - тернарный оператор

//                            Math

// +, -, *, /, % (остаток от деления), ** (возведение в степень).

let sum = 1+2;
console.log(sum);

let example2 = "1" + 2;// объединение строк
console.log(example2);// "12"

let example3 = true + 4; // implicit - true -> 1; false -> 0;
console.log(example3); // 5

let example4 = "a" / 9;
console.log(example4); // NaN

let example5 = "9" - 5; // - вызвал имплицитное преобразование типа "9" -> 9
console.log(example5); // 4 -> 9-5=4

let example6 = 7 % 3; // 3 + 3 + 1/3;
// 8 % 3 -> 2 (остаток от деления)
// 8 % 4 -> 0
console.log(example6); // 1
const myAge = 31;
const myAgeIs = (myAge % 2) === 0; // odd -нечётное, even - чётное;
console.log(myAgeIs);

const example7 = 2 ** 3; // 2 * 2 * 2 = 8
console.log(example7);

//                    logical (boolean)
// ||   - или (хотя бы один операнд истина)
// &&   - и (оба истина)
// !    - отрицание 

let example8 = true || false; // true
let example9 = true && false; // false
let example10 = !true; // false
console.log(example8, example9, example10);

let example11 = !!5;// true
let example12 = !!0;// false
console.log(example11, example12);
let example13 = Boolean(5);

// c || есть интересный пример

const myName = "Anton";
const defaultName = "John";

const result = myName || defaultName;
console.log(result);

const userAge = undefined;

const age = userAge || 18; // если userAge не указан, то age будет равен 18

// falsy
// null, undefined, '', 0, NaN ---> преобразуется в false

//                     Операторы сравнения
// >, <, >=, <=
console.log(6 > NaN);// false
console.log(NaN > NaN);// false

// Равенство 
// == - не строгое равенство (loose equality)
// === - строгое равенство (strict equality)

console.log("5" == 5);// true - не строгое (пробует сделать приведение типов и сравнивает ещё раз)
console.log("5" === 5);// false - строгое равенство

console.log("Hello" === true);// false (не совпадает тип данных)
console.log("Hello" == true);// false (не совпадает тип данных)
console.log("true" == true);// false (не совпадает тип данных)
console.log(String(true));// "true"
console.log(Number("Hello"));// NaN
console.log(Number(true));// 1
// 1 === NaN - после преобразования

console.log("9" == 9); // true
console.log(Number("9")); // 9
console.log(('9' + 3) == 12); // false ('9' + 3 -> "93" -> 93 -> 93 === 12)
//исключение
console.log(undefined == null); // true

console.log(Number(null));       // 0
console.log(Number(undefined));  // NaN

// !=    не строгое (не используется)
// !==   строгое неравенство = unequality


