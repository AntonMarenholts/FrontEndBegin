// проверили подключился ли скрипт
console.log("check");

// получаем элементы в переменные
const infoBtn = document.getElementById("info-btn");
const removeInfoBtn = document.getElementById("remove-info-btn");

// создать элемент параграфа
const infoMessage = document.createElement("p");
infoMessage.innerText = "This summer is not warm at all";
console.log(infoMessage);

// повесим слушателя событий
infoBtn.addEventListener("click", () => {
    // console.log("click-click");

    // добавили вновь созданный элемент в body документ
    document.body.appendChild(infoMessage);

});

// слушатель для кнопки удаления
removeInfoBtn.addEventListener("click", () => {
// удалить элемент со страницы
// чтобы удалить элемент нужно вызвать от него метод remove
infoMessage.remove(); // убрали элемент со страницы - открепили
});

//
const infoClone = infoBtn.cloneNode(infoBtn);
infoClone.id = "new-id-msg"; // заменили id
console.log("Склонированный узел с изменённым id", infoBtn);