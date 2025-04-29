/*
Задание 1
Создайте метод который принимает массив и возвращает новый! массив с теми же данными, 
но первый и последний элементы в массиве должны быть поменяны местами.
Исходный массив должен остаться неизмененным после вызова метода.
*/

function swapFirstLast(arr) {
  const newArr = [...arr];

  if (newArr.length >= 2) {
    const first = newArr[0];
    const last = newArr[newArr.length - 1];

    newArr[0] = last;
    newArr[newArr.length - 1] = first;
  }
  return newArr;
}

/*
Создайте метод который принимает массив строк, ничего!! не возвращает. 
Метод должен заменить текст в первом элементе массива, чтобы он был с большой буквы.
["apple", "orange"] ---> ["Apple", "orange"]
*/

function capitalizeFirstString(arr) {
    if (arr && arr.length > 0) {
      arr[0] = arr[0].charAt(0).toUpperCase() + arr[0].slice(1);
    }
  }
  let fruits = ["apple", "orange"];
capitalizeFirstString(fruits);
console.log(fruits);
