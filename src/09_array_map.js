var carros = [];

carros[0] = { marca: 'Ford', modelo: 'ka'};
carros[1] = { marca: 'Chevrolet', modelo: 'Corsa'};
carros[2] = { marca: 'Fiat', modelo: 'Palio'};

var carrosMap = carros.map(function (elemento){
     return elemento.modelo.length; //quantidade de caracteres na string
    });
    
 console.log("Map: " + carrosMap);