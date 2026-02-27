const prompt = require("prompt-sync")();

let notas = [];
let soma = 0;
let quantidade = Number(prompt("Quantas notas você deseja digitar? "));

for (let i = 0; i < quantidade; i++) {
    let nota = Number(prompt(`Digite a nota ${i + 1}: `));
    notas.push(nota);   
    soma += nota;       
}

console.log("Notas digitadas:", notas);
console.log("Soma total:", soma);

/*Neste exercício, foi criado o vetor Notas, a variável acumulativa chamada soma, e a quantidade
que guardaria a quantidade de repetições que a pergunta será feita.
Logo, com laço for, é feito o processo de repeticao junto da pergunta.
o valor é salvo com ajuda do push, e acumulado na variavel soma e logo printado os resultados*/