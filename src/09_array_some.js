var carros = [];

carros[0] = { marca: 'Ford', modelo: 'ka'};
carros[1] = { marca: 'Chevrolet', modelo: 'Corsa'};
carros[2] = { marca: 'Fiat', modelo: 'Palio'};

var carrosSome = carros.some(function (elemento){
     return elemento.marca === "Ford";
    });
    
    console.log("Some: " + carrosSome);
