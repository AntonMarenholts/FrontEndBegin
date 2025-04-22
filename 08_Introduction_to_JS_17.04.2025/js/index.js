console.log("Hello, Word!");

// объявили переменную и присвоили значение 6

// 7 примитивных типов данных в JavaScript

// 1. number - число
// 2. string - строка
// 3. boolean - логический тип (true/false)
// 4. null - значение "ничего" (отсутствие значения)
// 5. undefined - переменная объявлена, но не инициализирована (не имеет значения)
// 6. symbol - уникальный и неизменяемый примитивный тип данных, который используется для создания уникальных идентификаторов для свойств объектов
// 7. bigint - целые числа произвольной длины (больше, чем Number.MAX_SAFE_INTEGER)

// тип number
let x; // объявить
x = 10; // присвоить значение = инициализация

console.log(x); 

// нецелые числа тоже number
let y =12.5;
console.log(y);

x=13;
x = y; //
console.log(x);

// тип string
x = "Ten";
console.log(x);

let name = "Anton";


// bigInt для очень крупных чисел
let z = 12121212n;

// Тип undefined
let message;
console.log(message);

// Тип null
let secondName = null;

// Тип boolean (true , false)
let isMail = true;

let isBigger = 10 > 4;
console.log(isBigger);

// Constanta
const m = 12;
// m = 13; ошибка !!!
const COLOR_RED = "#F00";

// Тип Symbol
const symbol = Symbol("key");
console.log(symbol);
// в качестве уникальных ключей

// Не примитив Object
const user = {
    "email":"ahtoh.ukr@gmail.com"
};
console.log(user);

// Преобразование типов
// falsy values - те,которые преобразуются в false
// явное и неявное

// явное
// 10 -> "10"
let ten = 10;
let tenString = String(ten);
console.log(tenString);

console.log(typeof ten);
console.log(typeof tenString);
console.log(typeof tenString === "string");

// неявное
let elewenAsString = 11 + ''; // '11'

// Приведение к числу
// '11' -> 11
let elewen = Number(elewenAsString);
console.log(elewen);
console.log(typeof elewen);

let wrongNumber = Number("ajhsjkdlkd");
console.log(wrongNumber); // NaN - это особое значение
console.log(typeof NaN); // тип значения number

if(x < Infinity){
    console.log('bla');
}
console.log(typeof Infinity);

// преобразование в boolean

// явное 
console.log(Boolean("Anton"));     //true
console.log(Boolean("12"));        //true
//falsy значения
console.log(Boolean(""));          //false
console.log(Boolean(0));           // false
console.log(Boolean(undefined));   // false
console.log(Boolean(NaN));         // false
console.log(Boolean(null));        // false

// неявное
const moneyPoint = 12;
const moneyBrotherPoint = 0;

if(moneyPoint){
    console.log('I\'m rich'); // недостижимый код - не выполнится
}

let myUser = null;
if(myUser){
    console.log('User exists');
}

myUser = {email: "user@gmail.com"};

if(myUser){
    console.log(myUser.email);
}

// Шаблонные строки
const myAge = 43;
const myName = "Anton";

const text = `Меня зовут ${myName}. Мне ${myAge} года`;
console.log(text);
