// HTTP
// status

// method
// GET - получение информации
// POST - создание нового ресурса
// PUT - изменение существующего ресурса
// DELETE - удаление ресурса
// HEAD - получение метаданных ресурса
// OPTIONS - получение информации о поддерживаемых методах
// PATCH - частичное изменение ресурса
// CONNECT - установление соединения с ресурсом
// TRACE - получение информации о запросе и ответе сервера


// структура запроса
// url
// https://lms.ait-tr.eu/#/student-cabinet/cohort/104/front_end/lecture
// протокол соединения https
//  домен              lms.ait-tr.eu
// путь path       
// параметры запроса    

// по умолчаню фетч делает GET запрос
function fetchProducts() {
  fetch("https://dummyjson.com/products")
    .then((res) => res.json())
    .then((data) => {
    //   console.log(data.products[0]);

    })
    .catch((err) => {
      console.log(err);
    });
}

fetchProducts();

function fetchProductById(id) {
  fetch(`https://dummyjson.com/products/${id}`)
    .then((res) => res.json())
    .then((product) => {
      console.log(product);
    })
    .catch((err) => {
      console.log(err);
    });
}

fetchProductById(2);


//Post - используется для создания ресурса на бэкенде, часто для логина или регистрации
// попробуем сделать запрос на логин

fetch('https://dummyjson.com/auth/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    
    username: 'emilys',
    password: 'emilyspass',
    expiresInMins: 30,
  }),
  credentials: 'include' 
})
.then(res => res.json())
.then(console.log);