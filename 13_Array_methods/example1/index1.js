// Array.prototype

// push, pop, shift, unshift - мутирующие методы
// at - возвращает элемент (аналог бокс синтаксис)

const fruit = ["apple", "orange", "grape"];

console.log(fruit.at(0));
console.log(fruit.at(-1));

// map - создаёт новый массив, не мутирует исходный
const fruitUpper = fruit.map(fruit => fruit.toUpperCase());
console.log(fruitUpper);

const fruitLengthes = fruit.map((fruit) => fruit.length);
console.log(fruitLengthes);

// pipeline
// ["5", "6", "5"]
const strArr = fruit.map(fruit => fruit.length.toString());
console.log(strArr);

// пример использования с массивами объектов
const animals = [
    {name: "Po", specie: "panda", weight: 300},
    {name: "Tiger", specie: "tiger", weight: 250},
    {name: "Kovalskiy", specie: "pinquin", weight: 5},
    {name: "Melman", specie: "giraffe", weight: 600},
];

// хочу создать массив с более толстыми версиями этих животных
const americanAnimals = animals.map(animal => animal.weight *= 1.3);
console.log(animals);
console.log(americanAnimals);

console.log("==============================");

const americanAnimals1 = animals.map(animal => {
    const americanAnimals2 = {...animal};
    americanAnimals2.weight *= 1.3
    return americanAnimals2;
});
console.log(animals);
console.log(americanAnimals1);

console.log("==========================");

const americanAnimals3 = animals.map((animal) => ({
    ...animal,
weight: animal.weight * 1.3,
}));
console.log(animals);
console.log(americanAnimals3);


const animalsNames = animals.map(animal => animal.name);
console.log(animalsNames);

// если мы хотим изменить исходный массив - элементы в нём, то лучше использовать метод forEach
// метод можно использовать,чтобы выполнить операции с каждым элементов

// добавим в каждый объект исходного массива новое поле
// т.е мутируем каждое животное
// isHealthy = true

animals.forEach(animal => {
    animal.isHealthy = true;
});

console.log(animals);

// reduce
// Мы решили отвезти животных на экскурсию автобусную
// грузоподъёмность автобуса 2500 кг
// Сможем ли мы поместить животных в автобус

let acc = 0;
const totalWeight = animals.reduce((acc, current) => acc + current.weight, 0);
console.log(totalWeight);

const dishes = [
    {name: "bamboo", calories: 500},
    {name: "meat", calories: 1600},
    {name: "fish", calories: 1000},
];

let cal = 0;
const totalCalories = dishes.reduce((cal, total) => cal + total.calories, 0);
console.log(totalCalories);

// join
const fruitsCoctail = fruit.join("-");
console.log(fruitsCoctail);

const ensurance = "123.123.123.12334455";
const numsString = ensurance.split("."); // dilimeter - разделитель(символ,который отделяет друг )
console.log(numsString);// [ '123', '123', '123', '12334455' ]

const nums = numsString.map((element) => Number(element));
console.log(nums); // [ 123, 123, 123, 12334455 ]

// Пингвин заболел, найдём и заразим
animals.forEach((animal) => {
    if (animal.specie === "pinquin"){
        animal.isHealthy = false;
    }
});
console.log(animals);

console.log("===============");

// some - будет возвращать истину,если предикат выполняется хотя бы у одного элемента

// болеют ли все животные?
// every - будет возвращать истину,если предикат выполняется для всех

// стало известно,что разыскивается. Его вид - tiger, а его имя "killer"
// есть в нашем зоопарке такой тигр?

// hasKiller
const hasKiller = animals.some((animal) => animal.name === "Killer" && animal.specie === "tiger");
console.log(hasKiller);

animals.push({
    name: "Killer", specie: "tiger", weight: 350,
});
const hasKiller1 = animals.some((animal) => animal.name === "Killer" && animal.specie === "tiger");
console.log(hasKiller1);

// как найти и получить элемент,удовлетворяющий условию
// find
const killer = animals.find((animal) => animal.name === "Killer");
console.log(killer); // { name: 'Killer', specie: 'tiger', weight: 350 }

// как найти индекс элементаудовлетворяющего условию
const indexOfKiller = animals.findIndex((animal) => animal.name === "Killer");
console.log(indexOfKiller);  // 4

const hfnda = animals.lastIndexOf((animal) => animal.name === "Po");

console.log("============================");

// slice - метод,который нарезает массив
// создаёт копию из исходного массива. Указываем с какого индекса и по какой
// первый показывает начало - вкл
// второй - не вкл, можно не указывать
const shortList = animals.slice(2);
console.log(animals);// исходный массив не изменился
console.log(shortList);

console.log("======================");

// splice - мутирующий
const monthes = ["January", "February", "March", "April", "May"];
// можно указать элементы,который мы хотим подставить вместо вырезанного куска
//второй параметр указывает сколько элементов мы вырезаем,количество
const removeMonthes = monthes.splice(2, 2, "July", "August"); // мутирует исходный массив

console.log(monthes);
console.log(removeMonthes);

console.log("---------------------");

const chars = ["@", "@", "@", "*", "*","$"];
// "*" хочу заменить на "#"

const substitutes = ["#", "#"];
 chars.splice(3,2, ...substitutes);
 console.log(chars);

 // findIndex, splice
 
 animals.splice(indexOfKiller, 1); // убрали элемент по индексу
 console.log(animals);

 