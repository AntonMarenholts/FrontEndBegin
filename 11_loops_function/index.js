
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// создать цикл,который вывел бы в консоль числа от 100 до 0, через 2

for (let i = 100; i >=0; i-=3) {
    if(i===1){
        console.log(0);
    }
    
}
console.log("-------------------");
// более сложное
for (let i = 100, j = 5; i > j && j < 70; i--, j++){
    console.log(i,j);
}
console.log("----------------");

// while
let i = 100;
while (i > 0){
    console.log(i);
    i--;
}

console.log("---------------");

const animals = ["panda", "wolf", "fox"];
//с помощью цикла while сделать,чтоб все животные были написаны с большой буквы
// const animal = ["panda", "wolf", "fox"]; ----> const animal = ["Panda", "Wolf", "Fox"];

let a = 0;
while (i < animals.length) {
  animals[i] = animals[i].toUpperCase();
  i++;
}
console.log(animals);

// for .... of
for (let a of animals){
    console.log(a);
}

