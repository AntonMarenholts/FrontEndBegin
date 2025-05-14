// Promise

// fulfilled - удовлетворено
// rejected - отклонено
// pending - ожидание

// сначала pending - а потом по обстоятельствам - либо fulfilled , если всё ок
// либо  rejected - если возникла ошибка или проблема

// Ассинхронные функции - возвращают promise

// Создадим промис, который возвращает нам бургер

const burgerPromise = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("Tasty burger");
  }, 3000);
});

console.log(burgerPromise);

// подождать значение === раскрыть промис
// метод then - подождёт пока появится значение -
burgerPromise.then((burger) => {
    console.log("Внутри колбэка: " + burger);
});

console.log("Вне колбэка бургер: " + burgerPromise);

// Reject
const badPromise = new Promise(function(resolve, reject) {
    setTimeout(() => {
        reject(new Error("The kitchen is on fire"))
    }, 3000);
});

badPromise
  .then((burger) => {
    console.log(burger);
  })
  .catch((err) => {
    console.log(err.message);
  });


  // написали функцию для генерации простых чисел
  function getRandomNumber (max) {
    return Math.floor(Math.random() * max)
  };

  // при успехе возвращать - Here is you 3D printer
  // при не успехе - Error "You didn't behave this year!"
 const printerPresent = new Promise(function(resolve, reject) {
    setTimeout(() => {
        if (getRandomNumber(2)) {
            resolve("Here is you 3D printer")
        }
        reject( new Error ("You didn't behave this year!"));


    }, 2000);
    
 });

printerPresent
  .then((present) => {
    console.log(present);
  })
  .catch((err) => {
    console.log(err);
  });