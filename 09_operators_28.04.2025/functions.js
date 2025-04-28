function sum (a,b = 14){
    return a + b;
}

sum(10,12);
console.log(sum(2));

// напишите функцию,которая принимает фамилию и возвращает приветствие
// Smith  -> "Hi,Smith! How are you?"
// если не указана фамилия,нужно использовать "Dowson"

function greet(secondName) {
    return `Hi,${secondName || "Dowson"}! How are you?`
}

console.log(greet());

const greeting1 = greet("Smith");
console.log(greeting1); // Выводит "Hi, Smith! How are you?"