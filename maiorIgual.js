const prompt = require ("prompt-sync")();

let nota = Number(prompt("Digite a nota do aluno aqui: "));

if (nota >= 6) {
    console.log("Aluno aprovado!");
} else {
    console.log("Aluno reprovado.");
}
        
 /*
Descrição do exercício sobre status do aluno: 

Esse exercício tem como objetivo o operador relacional ">=" (maior ou igual).
O programa pede a nota do aluno e verifica
se ela é maior ou igual a 6.

Se a nota for maior ou igual a 6,
o aluno é considerado aprovado.
Caso contrário, ele é reprovado.

O operador ">=" é usado para comparar números.
Ele verifica se um valor é maior que outro
ou se é exatamente igual a ele.
*/   
        
        
        