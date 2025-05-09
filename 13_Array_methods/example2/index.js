//
const drinks = [
    {name: "Bloody Mary", strength: 14, price: 7},
    {name: "Jin", strength: 25, price: 4},
    {name: "Beer", strength: 7, price: 3.5},
    {name: "Cider", strength: 2, price: 5},
];

// Задание 1
// найдите индекс Jin
// Замените джин на объект "Tequila"

// Задание 2
// Сделайте все напитки в массиве крепче на 1 градус

// 1
const indexJin = drinks.findIndex((drink) => drink.name === "Jin");
console.log(indexJin);

drinks.splice(indexJin, 1);
console.log(drinks);

// 2
drinks.forEach((drink) => drink.strength++);
console.log(drinks);


// reverse - мутирующий!!! Но возвращает ссылку на исходный массив

drinks.reverse();
console.log(drinks);

// sort

const parts = ["air filter", "tires", "spark plugs", "accumulator"];
parts.sort();
console.log(parts);

const nums = [1,4,65,23,16,-9,112,21,12];
nums.sort();
console.log(nums);// отсортировал как STRING


// -1, 0, 1
nums.sort((a,b) => a-b);// обычная сортировка а - b
console.log(nums);

nums.sort((a,b) => b - a);// обратная сортировка а - b
console.log(nums);

parts.sort((a,b) => b.localeCompare(a));


drinks.sort((a,b) => a.price - b.price);
console.log(drinks);

// сравнение по нескольким параметрам
// сначала сравним по цене
// если цена совпадает,то сортируем по названию - по алфавиту

drinks.sort((a,b) => {
    const priceResult = a.price - b.price;
    if(priceResult === 0){
        // проверяем по алфавиту
        return a.name.localeCompare(b.name);
    }
    return priceResult;
});
console.log(drinks);