// object
// key - value

const user = {email: "John@mail.com"};
const age = 18;

// user = {email: "bob@gmail.com"};
// console.log(user);

user.email = "John2@gmail.com";

console.log(user);

// как добавить новое свойство 

user.eyeColor = "brown";
console.log(user);

// "hair color" - так делать не стоит
user["hair color"] = "yellow"; // box syntax
console.log(user);

// Пример того как можно создавать объект из переменных
const pandaName = "Po";
const favoritFood = "bambook";

const panda = {
    name: pandaName,
    favoritFood // short syntax - если имя переменной совпадает с ключем, который мы хотим выдать
}; 
console.log(panda);

// Создать переменную рост и назовите её bobHeight и пусть будет равна 184
// создайте объект bob с ключем height в котором буде лежать значение bobHeight

const bobHeight = 184;

const bob = {
    height: bobHeight,
};
console.log(bob);

// динамический ключ - ключ,который лежит внутри переменной
const key1 = "name";
const giraffeSam = {
    name: "Sam",
    age: 7
};
console.log(giraffeSam.key1);
console.log(giraffeSam[key1]);

const keys = ["name", "age"];
for (let i=0; i<keys.length; i++){
    console.log(giraffeSam[keys[i]]);
};

// Какие у объекта есть ключи?
// список ключей объекта

const keyofGiraffe = Object.keys(giraffeSam);
console.log(keyofGiraffe);

// Список значений объекта
const valuesOfGiraffe = Object.values(giraffeSam);
console.log(valuesOfGiraffe);// [ 'Sam', 7 ]

// entries - пары ключ-значение
const entries = Object.entries(giraffeSam);
console.log(entries);// [ [ 'name', 'Sam' ], [ 'age', 7 ] ]

// freeze
const breakfast = {
    title: "omlet",
    calories: 1200,
};

Object.freeze(breakfast);

// можем ли добавить новый ключ после заморозки?
breakfast.warm = true;

console.log(breakfast.warm);// undefined
console.log(breakfast);

// Можем ли мы изменить значение уже бывших свойств? НЕТ
breakfast.title = "cereal";
console.log(breakfast); //{ title: 'omlet', calories: 1200 }


const dinner = {
    title: "pasta",
    colories: 2000
};
Object.seal(dinner);

// Могу ли я добавить новое свойство?
dinner.fat = true;
console.log(dinner); // не добавилось

// Могу ли я изменить старое свойство? ДА
dinner.colories += 200;
console.log(dinner);

// Object create - можем создавать объекты
const musician = Object.create({name: "Mercury"});
console.log(musician);
console.log(musician.name);

// поговорим про прототипное наследование позже

const address = {
    street: "Pfonder",
    number: 12,
};
const firma = {
    title: "Horns and hoofs",

};

Object.assign(firma, address);
console.log(firma);//  { title: 'Horns and hoofs', street: 'Pfonder', number: 12 }

address.post = 66663;
console.log(firma);

// аналог того же самого - это spread оператор

const personInfo = {
    name: "Fedor",
};

const meddicalInfo = {
    bloodType: 1,
};

const fedor = {
    ...personInfo,   // скопировали поля из объекта personInfo при помощи спреда
    ...meddicalInfo,  // скопировали поля из объекта meddicalInfo
    age: 19           // указали ручками ключ значения
};
console.log(fedor);

// создайте метод,который принимает объект и два параметра типа строка
// первый из них - это будущий ключ, второй - будущее значение

// пусть метод возвращает новый объект с добавлением указанного поля со значением.

// ({email: "bob@gmail.com"}, "eyeColor", "brown")
// ---> {email: "bob@gmail.com", eyeColor: "brown"}

function unify(obj, additionalKey, additionalValue){
    // const newObj = {...obj};
    // obj[additionalKey] = additionalValue;
    // return newObj;

    return {...obj, [additionalKey]: additionalValue}

    
};

const book = {title: "Abram"};
const newBook = unify(book, "author", "Tolkien");

newBook.title = "Harry Potter";

console.log(newBook);
console.log(book);



