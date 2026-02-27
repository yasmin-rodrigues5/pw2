const prompt = require ("prompt-sync")();

let vetorA = [
    Number(prompt("Digite A (x): ")),
    Number(prompt("Digite A (y): "))
]


let vetorB = [
    Number(prompt("Digite B (x): ")),
    Number(prompt("Digite B (y): "))
];


let vetorC =[
    vetorA[0] + vetorB[0],
    vetorA[1] + vetorB[1]
];

console.log(vetorC)


/* Neste exercicio, é feito a soma dos valores do vetor, primeiramente
 foi criado o vetor A e Vetor B que pedem o preenchimento dos valores para o usuário,
 é também criado o vetor C que guarda o resultado da soma dos vetores anteriores.
 E que logo é printado no console */