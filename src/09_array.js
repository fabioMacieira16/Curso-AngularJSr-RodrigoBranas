/*
    Os Arrays sã apenas objetos especiais
    que oferecem meios para acessar e manipular
    suas propriedades por meio de índices
*/

// Modulo 01
var carro = ["Bmw", "Jeep", "Mercedes"];
console.log("carro " + carro);
// Modulo 02
var carros = new Array("Bmw2", "Jeep", "Mercedes");
console.log("carros: " + carros);

// API Array
//ValueOf

console.log("valueOf: " + carros.valueOf());
console.log("toString: " + carros.toString());
console.log("length: " + carros.length); //Length é uma propriedade
console.log("push: " + carros.push("I30")); // insere um elemento no final do array
console.log(carros);
console.log("pop: " + carros.pop("I30")); // remove o ultimo elemento do array
console.log(carros);

console.log("unshift: " + carros.unshift("I30")); // insere um elemento no Inicio do array
console.log(carros);

console.log("shift: " + carros.shift()); // remove o Primeiro elemento do array
console.log(carros);

console.log("indexOf: " + carros.indexOf("Bmw"));
console.log(carros);

console.log("splace: " + carros.splice(1,1)); // remove um item
console.log(carros);

console.log("splace: " + carros.splice(1,1, "Hilux")); //primeiro paramentro possição, segundo paramentro a quantidade de itens, e terceiro -> adiona um item
console.log(carros);

carros.forEach(function (elemento){
    console.log(elemento)
});



