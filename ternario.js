const prompt = require("prompt-sync")();

let numero = Number(prompt("Digite um número: "));

let resultado = numero % 2 == 0 ? 'par' : 'impar'
console.log(resultado)


/* 
Neste exercício, é pedido para o usuário digitar um número que é armazenado 
na variável numero.

Em seguida, é criada a variável resultado, utilizando o operador 
ternário para verificar se o número é par ou ímpar.

A condição verifica se o resto da divisão do número por 2 é igual a 0.
Se for verdadeiro, o resultado printado será "par".
Caso contrário, será "ímpar".
*/