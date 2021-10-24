var carros = [];

carros[0] = "ka";
carros[1] = "Corsa";
carros[2] = "Palio";
carros[3] = "GOl";


console.log(carros.slice(0,2)); // ["ka", "Corsa"]
console.log(carros.slice(1,3)); // ["ka", "Corsa"]
console.log(carros.slice(2)); // ["ka", "Corsa"] -> do indíce em diante