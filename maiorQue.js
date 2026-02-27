const prompt = require ("prompt-sync")();

let num1 = Number(prompt("Digite o primeiro número aqui: "));
let num2 = Number(prompt("Digite o segundo número aqui: "));

 if (num1 > num2) {
    console.log("O primeiro número é maior!");
} else {
    console.log("O segundo número é maior ou igual!");
}


/*
Descrição do exercício sobre números maior/menor: 

Esse exercício tem como objetivo praticar o uso do operador
relacional ">" (maior que).
O programa pede dois números ao usuário e compara os valores digitados.

Se o primeiro número for maior que o segundo,
o programa informa isso na tela.
Caso contrário, ele entende que o segundo número é maior ou igual.

O operador ">" serve para verificar se um valor é maior que o outro.
Ele retorna true se a condição for verdadeira
e false se não for.
*/