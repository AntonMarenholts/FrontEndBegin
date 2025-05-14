// regular expressions
//RegExp

// Найти фрагмент строки, подходящей под описание
// Можем все вхождения на какую-нибудь другую строку
// Проверить ли соответствует ли строка шаблону - валидация

const text1 = "Hello Alisher! Oh, Anna, you are also here, well hello there!";

console.log(text1.match(/Hello/));
console.log(text1.replace(/Hello/, "Good day"));

// Что такое флаги?  i, g

const text2 = "Apple Orange apple orange Apple Orange apple orange";
console.log(text2.replace(/apple/, "Banana"));

// без флага заменяется только первое вхождение

// флаг g позволяет работать со всеми вхождениями,а не с первыми
console.log(text2.replace(/apple/g, "banana"));

//флаг i делает не чувствительным к регистру
console.log(text2.replace(/apple/gi, "banana"));

// хочу проверить,что выражение состоит из буквы и нескольких чисел

// a87
// b675
// c99
// x88y - не подойдёт
const code = "Cakea87";
console.log(code.match(/.87/)); // точка соответствует любому символу - метосимвол для чего угодно

// проверим,начинается ли выражение со слова Cake
console.log(code.match(/^Cake/)); // каретка ^ обозначает начало строки

const example = "Hello John!";
console.log(example.match(/^John/)); // null в начале строки укажет,что нет указанного выражения

// есть ли слово в конце строки
// для этого $
console.log(example.match(/John!$/));// конец строки

// Хочу проверить,чтобы выражение из 4 символов начиналось на букву t и заканчивалось на 8
const example2 = "tuh8"; // должно проходить
const example3 = "tuh9"; // не должно проходить

console.log(example2.match(/^t..8$/));
console.log(example3.match(/^t..8$/));

// найти точку как знак препинания
// aaa.aaa.aaa

const example4 = "aaa.aaa.aaa";
// экранировать точку с помощью обратного слэша
// другие спец символы тоже нужно экранировать
console.log(example4.match(/aaa\.aaa\.aaa/));

// Как обозначить буквенные символы

// Хочу,чтоб слово начиналось с букв h, l или b?
// hate, late ,bate - ok
// wate - not ok

// любая из трёх подойдёт в качестве первого символа
const example5 = "hate, late ,bate";
console.log(example5.match(/[hlb]ate/));

// слово должно начинаться на букву F , дальше буква a или цифра 6
// на третьем месте может быть любой символ
// слово должно закончиться на любую строчную букву - нижний регистр
const word = "F6mv";
console.log(word.match(/^F[a6].[a-z]$/));

// [A-Za-z] все буквы
// [A-Za-z0-9] все буквы и все цифры
