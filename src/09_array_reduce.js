var carros = [];

carros[0] = { marca: 'Ford', modelo: 'ka', preco: 28800};
carros[1] = { marca: 'Chevrolet', modelo: 'Corsa', preco: 34750};
carros[2] = { marca: 'Fiat', modelo: 'Palio', preco: 32000};

//parametro = elelemto anteriro, elelemto atual. 
var carrosReduce = carros.reduce(function (prev, cur){ 
     return prev + cur.preco; 
    }, 0);
    
 console.log("Reduce: " + carrosReduce); // return 95550