/* A linguagem JavaScript não tem 
 - Classe
 - Construtor
 - Método
 - Módulo

  - Uma função é um objeto que contém um bloco de código executável
  - Esse bloco é isolado, não sendo possíve acessá-lo externamente

  - Na Linguagem javaScript, as funções são de primeira class 
  - Função de primeira classe é aquela que pode ser atribuida a uma variável, passada como
  parâmetro ou ser retornada de uma outra função.

  As funções podem ser invocadas de 4 formas
  - no scope global
  - call
  - apply
  - objeto
  - new
*/

function soma(a, b){
    return a + b;
}

var soma = function(a, b){
    return a + b;
}

var produto = {nome: 'sapato', preco: 150};

var formulaImpostoA = function(preco) {
    return preco * 0.1;
};

var formulaImpostoB = function(preco) {
    return preco * 0.1;
};

var calcularPreco = function(produto, formulaImposto){
    return produto.preco + formulaImposto(produto.preco);
}

calcularPreco(produto, formulaImpostoA); //165
calcularPreco(produto, formulaImpostoB); //180


/*Funçao que retorna outra função*/

var helloWord = function (){
    return function () {
        return "Hello Word!";
    };
};
console.log(helloWord);
console.log(helloWord());
console.log(helloWord()());

/*Invocando uma função por meio de um Objeto*/
var getIdade = function(extra){
    console.log(arguments);
    return this.idade + extra;
} 

var pessoa = {
    nome: "joão",
    idade: 20,
    getIdade: getIdade
};
console.log("usando this: " + pessoa.getIdade());
console.log("Usando call: " + pessoa.getIdade.call(pessoa, 2,1,3));
console.log("usando o apply: " + pessoa.getIdade.apply(pessoa, [2,1,3]));


/*usando call and apply*/
function soma(a, b){
    return a + b;
}

console.log("soma: " + soma(4,6));

/* Opeador new 
    - Funcoes construtoras vs versão fabricas
*/ 

var criarPessoa =  function(nome, idade){
  return {
      nome: nome,
      idade: idade
  };
};

console.log(criarPessoa("Pedro", 20));
console.log(criarPessoa("Maria", 20));

//Funcao Contrutura

var Pessoa = function (nome, idade) {
    this.nome = nome;
    this.idade = idade;
}

console.log(new Pessoa("new Pedro", 20));
console.log(new Pessoa("new Maria", 30));


var pedro = {};

Pessoa.call(pedro, "Pedro", 20);
console.log(pedro);

var maria = {};
Pessoa.call(maria, "Maria", 35);
console.log(maria);


//Criando uma Função simples - Closures(fechamento)

var helloWord = function(){
   var message = "hello Word!";

   return function (){
       return message;
   };
};

var fnHelloWord = helloWord();
console.log(fnHelloWord());

