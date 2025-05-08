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