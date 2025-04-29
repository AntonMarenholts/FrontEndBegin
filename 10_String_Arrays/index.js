let fruit = "apple";

let fruitUpper = fruit.toUpperCase();
console.log(fruitUpper);// все заглавные

console.log(fruit[0]);
console.log(fruit[10]);

console.log(fruit.at(0));
console.log(fruit.at(10));

console.log(fruit.toLowerCase());

console.log("0".toLowerCase());
console.log("A".toLowerCase());

console.log(fruit.charAt(8), "---");
console.log(fruit.charCodeAt(1));

//    useful
// "pine" + "apple"

const pine = "pine";
const pineapple = pine.concat("apple");
console.log(pineapple);

console.log("---------------------");

const email = " John@email.com";
console.log(email);
console.log(email.trim().toLowerCase()); // убирает все пустые места и приводит к нижнему регистру
console.log(email.indexOf("@")); // вывод индекса

console.log(email.trimEnd());
console.log(email.trimStart());

console.log("--------------");

//pad
const cake = "Cake";
console.log(cake.length);
console.log(cake.padStart(10).length);
console.log(cake.padEnd(10, "*"));// это то,какими символами будет заполнено остальное место

console.log("-----------");

// slice - получить кол-во символов
const sliceOfCake = cake.slice(3);
console.log(sliceOfCake);
console.log(cake.slice(0));
console.log(cake.slice(1));
console.log("-----------");
console.log(cake.slice(1,3));
console.log(cake.slice(-2));

console.log("рефрежератор".slice(-4));

// substring - получить подстроку
const animal = "panda";
console.log(animal.substring(2));// если указываем один параметр,то от индекса до конца строки
console.log(animal.substring(2,4));// если указываем один параметр,то от индекса до индекса
console.log(animal.substring(-2));

console.log("------------");

const token = "paper.bread.leaf";
const indexOfFirstDot = token.indexOf(".");
const indexOfLastDot = token.lastIndexOf(".");// чтоб найти индекс элемента справа
console.log(indexOfFirstDot);
console.log(indexOfLastDot);

// напишем метод,который принимает email и возвращает 
// имя пользователя -т.е. всё что идёт от значка собаки getNameFromEmail
// "alisher-khamidov@gmail.com" -----> alisher-khamidov

function getNameFromEmail(email){
    const atIndex = email.indexOf("@");
    if(atIndex < 0){
        throw new Error("invalid email")
    }
    return email.slice(0,atIndex).trimStart();
}

console.log(getNameFromEmail("alisher-khamidov@gmail.com"))
try{
console.log(getNameFromEmail("alisher-khamidovgmail.com"))
} catch(e){
    console.error(e);
}
console.log("дальше");


