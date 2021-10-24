/*
 o Tipo undefined é retornado caso uma propriedade de uma determinado objeto seja
  consultada e não exista
*/

var pessoa = {};

pessoa.nome = "Fabio Macieira";
pessoa.idade = 15;

for(var propriedade in pessoa){
    console.log(propriedade);
}
