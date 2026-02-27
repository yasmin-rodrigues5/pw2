const prompt = require ("prompt-sync")();

let nota = Number(prompt("Digite a nota do aluno aqui: "));

if (nota === 10) {
        console.log("Parabéns! Nota máxima!");
}


/*
Descrição do exercício sobre nota máxima: 

Esse exercício tem como objetivo praticar o uso do if simples.
O programa pede a nota do aluno e verifica uma única condição.
Se essa condição for verdadeira, a mensagem é exibida na tela.
Caso seja falsa, não aparece nada na tela.
Nesse caso, se o aluno tirar nota máxima,
o programa mostra uma mensagem de parabéns.
*/   