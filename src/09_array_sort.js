var carros = [];

carros[0] = { marca: 'Ford', modelo: 'ka', preco: 28800};
carros[1] = { marca: 'Chevrolet', modelo: 'Corsa', preco: 34750};
carros[2] = { marca: 'Fiat', modelo: 'Palio', preco: 32000};

var carrosSort = carros.sort(function (a, b){
    return a.preco - b.preco;

});

console.log("carrosSort: " + carrosSort); 


