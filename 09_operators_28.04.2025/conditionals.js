// условный оператор
// if

let age = 21;

if (age >= 21) {
  console.log("you can by alcohol");
} else {
  console.log("you can not by alcohol");
}

if (age >= 21) {
  console.log("you can by alcohol");
} else if (age === 1) {
  console.log("you can trink milk");
} else {
  console.log("you can not by alcohol");
}

// switch

const country = "UKR";
switch (country) {
  case "UK":
    console.log("London");
    break;
  case "USA":
    console.log("Washington");
    break;
  default:
    console.log("country unknown");
    break;
}

// myAge
// возраст 1 год - выведем малыш ,
// возраст 3 года - вывод ползунок
// 16 - вывод подросток
// 45 - вывод зрелый
// во всех остальных - вывод отличный возраст

let myAge = 3;
switch (myAge) {
  case 1:
    console.log("малыш");
    break;
  case 3:
    console.log("ползунок");
    break;
  case 16:
    console.log("подросток");
    break;
  case 45:
    console.log("зрелый");
    break;
  default:
    console.log("отличный возраст!");
}

console.log(12 - 3 + true + "12" + Boolean(NaN));

console.log("--------------------");

// ФУНКЦИИ

// functional declaration - объявление функции
function neighbour(time) {
    if(time > 0 && time < 8)
    console.log("Drell");
    return "dr-dr-dr-dr";
}

console.log("----------------");

neighbour(); // вызов функции - call
neighbour(); // вызов функции - call
const result = neighbour(7);
console.log(result);

console.log("------------------");

{
    const animal = "panda";
    console.log(animal);
}


