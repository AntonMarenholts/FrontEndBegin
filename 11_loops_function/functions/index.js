
//call
sayHi();

//hoisting = поднятие
// когда вызов может быть раньше в коде,чем сама декларация функции

// functional declaration

function sayHi(){
    console.log("Hi!");
}

console.log(x);// hoisting var без инициализации - только объявление
var x = 10;

// const и let так не работает!!!


// sayGoodbye(); --- НЕ СРАБОТАЕТ hoisting

// functional expression
const sayGoodbye = function () {
    console.log("Bye bye");
};

sayGoodbye();


// 
function butler(action) {
action();
};

butler(sayHi);
butler(sayGoodbye);


// сосед
function neighbour(action, thing){
    action(thing);

};

const party = function (track) {
    console.log("tuc-tuc " + track);
};
const drill = function(item){
    console.log("drrrrr " + item);
};

neighbour(party, "Anton");
neighbour(drill, "wall");


// Пример калькулятор
// calculator(add, 9, 7);
// calculator(devide, 9, 7);

function calculator(operation, a, b){
    return operation(a, b);
};

function add(a, b){
return a + b;
};

function devide(a,b){
    return a / b;
}

console.log(calculator(add, 9,7));
console.log(calculator(devide, 12,2));

// anonymus function - анонимная функция

// пример с вычитанием анонимной функции
const res = calculator(function(a,b) {return a-b}, 9, 4);// анонимная функция
const res1 = calculator((a,b) => a - b, 9, 4);// ЛЯМДА выражение
console.log(res);
console.log(res1);

// arrow function - стрелочная функция
// умножение
const multiply = (a, b) => a * b; // стрелочная функция без тела


const multiply1 = (a, b) => { // стрелочная функция c телом
    return a * b
};                    

// стрелочная функция,которую передали в качестве параметра в другую функцию называется КОЛБЕК

// возведение в степень (А возвести в степень В)
const power = (a, b) => a ** b;
const twoPower = calculator(power, 2, 3);
console.log(twoPower);

// pirate

function pirate(operation, item){
    operation(item);
};

const drinkSmt = a => {
    console.log("I drink " + a);
};
pirate(drinkSmt, "rom");
pirate(drinkSmt, "water");

