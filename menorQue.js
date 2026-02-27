const prompt = require ("prompt-sync")();

let idade = Number(prompt("Digite sua idade aqui: "));

if (idade < 18) {
    console.log("Você é MENOR de idade!")

} else {
    console.log ("Você é MAIOR de idade!")
}


/*
Descrição do exercício sobre maior/menor de idade: 

Esse exercício tem como foco o operador relacional "<" (menor que).
O programa pede a idade do usuário e verifica
se ela é menor que 18.

Se a idade digitada for menor que 18,
o programa mostra que a pessoa é menor de idade.
Caso contrário, informa que é maior de idade.

O operador "<" é usado para comparar números.
Ele verifica se um número é menor que outro.

*/