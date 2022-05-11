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

Pero que pasa ahora si vemos que los objetos de JS tienen unos tipos que el objeto JSON no tiene como por ejemplo una funcion vamos a agregarle a nuesto objeto un metodo saludar().

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
    "married": true,
    greet(){
        return "Hola"
    }
}

Si analizamos la transformacion vemos que al ser un tipo de datos que los objetos JSON no lo reconoce y simplemente no lo transforma.

Hasta el momento hemos visto un solo usuario pero suponiendo que tenemos una lista de usuarios, suponiendo que tenemos una lista de objeto, pra eso tenemos los corchetes []. Dentro tendremos cada objeto separados por comas:

const friends = [
    {},
    {},
    {},
    {}
]

const friends = [
    {
        name: "Joe",
        nickname: "Joe123"
    },
    {
        name: "Martin",
        nickname: "Martin123"
    },
    {
        name: "Julliet",
        nickname: "Julliet123"
    },
    {
        name: "Dan",
        nickname: "Dan123"
    }
]

const friendsJSON = JSON.stringify(friends);
console.log(friendsJSON);


Ahora podemos agregar al primer objeto user1 la lista de amigos:

user1.friends = friends;
const json2 = JSON.stringify(user2);
console.log(json1);

Ahora vamos a ver como mostrar esa lista de amigos, suponiendo que esa lista nos viene de un servidor y lo vamos a mostrar en el HTML

Aqui metenos la lista de amigos en HTML recorremos el array con un for:
let output = '';
for (let i= 0; i < friends.length; i++) {
    output = output + `<li>${friends[i].name} - ${friends[i].nickname}</li>`;
    console.log(output);
}
document.getElementById('people').innerHTML = output;

El metodo para convertir unJSON que nos viene del sevidor es el metodo JSON.parse() y recibe por parametro el objeto JSON.

const userObje = JSON.parse(json1);
console.log(userObje);

Lo tenemos que transformar a objeto de JS para poder usar todo el potencial de JS.
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
    "married": true,
    greet(){
        return "Hola"
    }
}

const user2 = {
    name: "Jose",
    lastname: "Perez"
}

// console.log(user1);
// console.log(user2);

const json1 = JSON.stringify(user1);
const json2 = JSON.stringify(user2);
// console.log(json1);
// console.log(json2);

const friends = [
    {
        name: "Joe",
        nickname: "Joe123"
    },
    {
        name: "Martin",
        nickname: "Martin123"
    },
    {
        name: "Julliet",
        nickname: "Julliet123"
    },
    {
        name: "Dan",
        nickname: "Dan123"
    }
]

user1.friends = friends;

const friendsJSON = JSON.stringify(friends);
// console.log(friendsJSON);
// console.log(user1);

// Aqui metenos la lista de amigos en HTML recorremos el array con un for:
let output = '';
for (let i= 0; i < friends.length; i++) {
    output = output + `<li>${friends[i].name} - ${friends[i].nickname}</li>`;
    console.log(output);
}
document.getElementById('people').innerHTML = output;

// El metodo para convertir unJSON que nos viene del sevidor es el metodo JSON.parse() y recibe por parametro el objeto JSON.

const userObj = JSON.parse(json1);
console.log(userObj);


