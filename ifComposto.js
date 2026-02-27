const prompt = require ("prompt-sync")();

let nota = Number(prompt("Digite a nota do aluno aqui: "));

if (nota >= 7) {
        console.log("Aluno APROVADO!");
} else if (nota >= 5) {
        console.log("Aluno em RECUPERAÇÃO!");
} else {
        console.log("Aluno REPROVADO!");
}


/* 
Descrição do exercício sobre situação do aluno: 

Esse exercício tem como objetivo praticar o uso da estrutura condicional
if, else if e else.

O programa pede a nota do aluno e, com base no valor digitado,
verifica a situação dele na escola.

Se a nota for maior ou igual a 7, o aluno está aprovado.
Se a nota for menor que 7, mas maior ou igual a 5, ele fica em recuperação.
Caso a nota seja menor que 5, o aluno está reprovado.
*/
