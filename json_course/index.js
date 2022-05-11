/*
Aqui tenemos un objeto del lenguaje JS: Un tipo de dato del lenguaje, puedes ver que se puede definir ese objeto de dos formas metiendo el valor entre dobles comillas o no.

const user1 = {
    "name": "Rayn",
    "lastname": "Ray",
    "age": 25,
    "nickname": "Rayn123",
    "hobbies":["run", "code", "eat"],
    "address": {
        "street": "123 Main St",
        "city": "New York"
    },
    "married": true
}

const user2 = {
    name: "Jose",
    lastname: "Perez"
}

console.log(user1);
console.log(user2);

Para que ese objeto de JS sea un objeto JSON debemos transformarlo, y para eso el lengueje de JS nos aporta un metodo JSON.stringify() recibe por parametro el objeto a convertir.

const json1 = JSON.stringify(user1);
const json2 = JSON.stringify(user2);
console.log(json1);
console.log(json2);

Como sabemos que tenemos un objeto en JSON, existe una herramienta online que podemos usar para comprobarlo, la encontramos en el siguiente enlace: json validator.

*/

const user1 = {
    "name": "Rayn",
    "lastname": "Ray",
    "age": 25,
    "nickname": "Rayn123",
    "hobbies":["run", "code", "eat"],
    "address": {
        "street": "123 Main St",
        "city": "New York"
    },
    "married": true
}

const user2 = {
    name: "Jose",
    lastname: "Perez"
}

console.log(user1);
console.log(user1.name);
console.log(user2);

const json1 = JSON.stringify(user1);
const json2 = JSON.stringify(user2);
console.log(json1);
console.log(json2);



