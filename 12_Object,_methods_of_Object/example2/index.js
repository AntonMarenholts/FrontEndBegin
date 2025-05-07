const leon = {
    name:"Leon",
    sayHello(){
        console.log(`Hello, i am ${this.name}`);
    },
};

leon.sayHello();

leon.name = "Leonid Igorevic";

leon.sayHello();

// example Circle

const circle = {
    radius: 5,
    getArea(){
        return Math.PI * this.radius ** 2;
    },
};
console.log(circle.getArea());

circle.radius = 10;
console.log(circle.getArea());

// Создайте объект квадрат square, пусть поле sideLength - сторона
// сделайте два метода посчитать площадь и посчитать периметр

const square = {
    sideLength: 10,
    getArea(){
        return this.sideLength ** 2;
    },
    getPerimeter(){
        return this.sideLength * 4;
    },
    // метод,который бы увеличивал ширину квадрата в 2 раза
    increaseLength(){
        this.sideLength = this.sideLength * 2;

    },
};

console.log(square.getArea());
console.log(square.getPerimeter());

square.increaseLength();
console.log(square.getArea());

const {getArea} = square;

console.log(getArea()); // функция в отрыве от объекта - без this

// bind call


// bind создаёт новую функцию, в которой в качестве this выступает указанный объект
const chessBoard = {
    sideLength: 3,
};

const getAreaOfChessBoard = getArea.bind(chessBoard);
chessBoard.sideLength += 2; // если объект мутировал - функция будет работать с ним
console.log(getAreaOfChessBoard());

// другой пример

function sayHi() {
    console.log("My name is " + this.name);
};

sayHi();

const anton = {name: "Anton"};
const antonSayHi = sayHi.bind(anton); // получил связанную с объектом функцию

antonSayHi();


