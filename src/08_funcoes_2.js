/* Como a linguagem não possui um ligador ou link, faz uso de um escopo global compartilhando para estabelecer os 
     vínculos entre diferentes partes de uma aplicação

     Como fazer para encapular
     - usar um objeto - COnjuto de chave e valores

     A Linguagem JavaScript não possui modificadores de visibilidade como private ou public 

     Uma função é um objeto que contém um bloco de código execultavel

     forma um bloco isolado, não sendo possível acessá-lo externamente
*/

var counter = 0;

var add = function(){
    return ++counter;
};

console.log(add());
console.log(add());
console.log(add());

var itens = [];
var add = function (item){
    itens.push(item);
    return itens;
};

console.log(add('A'));
console.log(add('B'));
console.log(add('C'));



var counter = {
    value: 0,
    add: function(){
        return ++this.value;
    }
};

console.log("new counte : " + counter.add());
console.log("new counte : " + counter.add());
console.log("new counte : " + counter.add());


var itens = {
    value: [],
    add: function (item){
        this.value.push(item);
        return this.value;
    }
};

console.log("new itens: " + itens.add('A'));
console.log("new itens: " + itens.add('B'));
console.log("new itens: " + itens.add('C'));

counter.value = undefined;
console.log(counter.add()); //NaN

// new form de escrever
var CreatCounte = function () {
    var value = 0;
    return {
        add: function () {
            return ++value;
        }
    }
};
var counter = CreatCounte();

console.log(counter.value); //undefined
console.log(counter.add()); 
console.log(counter.add()); 
console.log(counter.add()); 


// Variação com Construction Function

var Counter = function(){
    var value = 0;
    this.add = function(){
        return ++value; 
    }
}

var counte = new Counter();
console.log(counter.value); //undefined
console.log(counter.add()); 
console.log(counter.add()); 
console.log(counter.add()); 

//Module Pattern
var counter = (function() {
    var _value = 0;
    var _add = function () {
        return ++_value;    
    };
    var _reset = function(){
        _value = 0;
    }
    
    return {
        add: _add,
        reset: _reset
    };
})();

console.log(counter.value); //undefined
console.log(counter.add()); 
console.log(counter.add()); 
console.log(counter.add()); 
counter.reset(); //volta a contar novente no 1 
console.log(counter.add()); 






