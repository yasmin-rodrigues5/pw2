
const prompt = require("prompt-sync")();

let vetor = [];

// Pedindo 3 números
for (let i = 1; i <= 3; i++) {
    let numero = Number(prompt(`Digite o número ${i}: `));
    vetor.push(numero);
}

console.log("\nNúmeros digitados:", vetor);

// Usando map para dobrar os valores
let dobrados = vetor.map(function(numero) {
    return numero * 5;
});

console.log("Números dobrados:", dobrados);

/*
Descrição do exercício sobre números dobrados no vetor: 

Esse exercício tem como objetivo praticar o uso do método map.
O programa pede três números ao usuário e armazena
esses valores dentro de um vetor.
Depois, o map é usado para percorrer esse vetor
e criar um novo vetor com os valores multiplicados por 5.

O map funciona aplicando uma função em cada elemento do vetor,
sem alterar o vetor original.
Ele sempre retorna um novo vetor com as modificações feitas.
*/