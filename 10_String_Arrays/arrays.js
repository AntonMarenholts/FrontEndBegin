//                ARRAY

const students = [];
const teachers = ["Sergey", "Alisher", "Igor" ];
console.log(teachers);

// можем получить из массива элемент по индексу
const firstTeacher = teachers[0];
console.log(firstTeacher);

// ещё один способ создать массив
const animals = new Array(); // пустой массив
const plants = new Array("Camomile", "Dandelion", "Basil");
console.log(plants);

console.log(teachers[10]);//undefined

//ещё один способ получить элемент по индексу
const secondTeacher = teachers.at(1);
console.log(secondTeacher);

const negativeTeacher = teachers.at(-1);
console.log(secondTeacher);

// добавить элемент
console.log(plants);
plants[3] = "Oak";
console.log(plants);// не удобно,можно что-то перезаписать

plants.push("Cactus");// добавляет в конец !!!
console.log(plants);

// перезаписать последний элемент
console.log(plants.length);
plants[plants.length - 1]= "Rosa";
console.log(plants);

// забирает последний элемент массива и возвращает его
// мы сохранили этот элемент в отдельную переменную
const rose = plants.pop();
console.log(plants);
console.log(rose);


/*
метод,который принимает 3 параметра
возраст, имя, цвет волос

*/


// shift - забирает элемент вначале, unshift - добавляет элемент в начало

const cars = ["BMW"];
cars.unshift("Mersedes");// добавили элемент слева
console.log(cars);

const mersedes = cars.shift();// забрали элемент из начала
console.log(cars);

// о сложных местах
// почему мы сохр. в константу и изменение массива не вызвало проблему

const cities = ["Berlin"];
const cities2 = cities;

cities.push("London");
console.log(cities);

// Вопрос: как сделать копию значений массива,чтоб он был независим от первого массива?

const newCities = [...cities]; // spread оператор
newCities.push("Hamburg");

console.log(cities);
console.log(newCities);

// как мы можем создать массив из двух других?
const array1 = ["a", "b", "c"];
const array2 = ["d", "e", "g"];

const alfabet = [...array1, ...array2];
console.log(alfabet);



