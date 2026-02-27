const prompt = require("prompt-sync")();

let  = [];

for (let i = 1; i <= 3; i++) {
    let nome = prompt("Digite o nome " + i + ": ");
    vetor.push(nome);
}

console.log("\nOs nomes digitados são:");

vetor.forEach(nome => {
    console.log(nome);
});



/*
Descrição do exercício sobre números dobrados no vetor: 

Esse exercício tem como objetivo praticar o uso do método forEach.
O programa pede três nomes ao usuário e armazena todos dentro de um vetor,
depois, o forEach é usado para percorrer o vetor e mostrar cada nome no console.

O forEach serve para executar uma ação para cada elemento do vetor,
mas sem criar um novo vetor como o map faz.
*/

