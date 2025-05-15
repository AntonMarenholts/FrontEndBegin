
// JSON

// JavaScript object notation

const user = {
    name: "John",
    age: 18,

};

// основной формат передачи и хранения информации - это JSON

const userAsJSONString = JSON.stringify(user);
console.log(userAsJSONString);// {"name":"John","age":18}

const userFromJson = JSON.parse(userAsJSONString);
console.log(userFromJson); // { name: 'John', age: 18 }