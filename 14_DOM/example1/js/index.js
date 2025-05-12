console.log("Hello");

// методы для того,чтобы получить элемент документа

const messageElement = document.getElementById("welcome-message");
const magicBtn = document.getElementById("btn-js");
const catBtn = document.getElementById("btn-cat");
const containerForCat = document.getElementById("container-cat");

// нужно убедиться,что действительно получили элемент, а не null
console.log(messageElement);
console.log(magicBtn);
console.log(catBtn);
console.log(containerForCat);

// eventListener - слушатель событий - который будет вызывать при определённых событиях callback
magicBtn.addEventListener("click", () => {
  console.log("function is working"); // убедимся что функция работает

  // innerText
  // можем обратиться к элементу и обновить значение
  messageElement.innerText = "JS is here!";
});

//                                 АЛГОРИТМ ДЕЙСТВИЙ
// подключаем скрипт,не забываем про дефер!!!
// проверяем,что скрипт работает
// получаем нужные нам элементы и сохраняем в переменные
// прописываем,если нужно,слушатель событий - проверяем - работает ли он вывдом в консоль
// делаем то, что нам нужно



// создание нового элемента
const catImg = document.createElement("img");
console.log(catImg); // <img>

catBtn.addEventListener("click", () => {
  console.log("cat is almost here.");

  // зададим атрибуты
  catImg.setAttribute(
    "src",
    "https://preview.redd.it/i-keep-seeing-this-angry-cat-meme-does-anyone-know-what-v0-0o96ygkg9jw91.jpg?width=640&crop=smart&auto=webp&s=f2b697113affe3da13283197767d071e80644ff7"
  );
  console.log(catImg);

  catImg.setAttribute("alt", "cat-meme");
  console.log("после добавления атрибутов", catImg);

  // прописать некоторые стили
//   catImg.style.width = "200px";
//   catImg.style.borderRadius = "20px";

  // но удобнее добавить через класс  и css
  catImg.classList.add("catImg");

  // прикрепить новый элемент - картинку к html
  // appendChild - добавляет дочерний документ в родителя

  containerForCat.appendChild(catImg);
});
