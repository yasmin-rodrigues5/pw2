// Exemplo 1 
/*const prompt = require ("prompt-sync")();

let idade = Number(prompt("Digite a sua idade: "));
console.log("Voce tem " + idade + " anos!");

if (idade >= 18) {
    console.log("Voce é de maior");
} else {
    console.log("Voce não é de maior");
}
*/

// Exemplo 2
const prompt = require ("prompt-sync")();

let salario = Number(prompt("Digite o valor do seu salário: "));
console.log("Voce recebe um salario de: " + salario);

if (salario = 1500) {
    console.log("Voce recebe um salario minimo");
} else if (salario < 1500){
    console.log("Você recebe menos que um salario minimo");
} else{
    console.log("Você receba mais que o salário minimo")
}


/*Nesse exemplos usando o IF Else, a variável recebe o valor fixo e logo 
é verificado se a valor bate com a condicao (Ex: idade > 18), 
e logo é mostrado a mensagem de acordo com o resultado.
(ex: idade <18 = mensagem > menor de idade)
*/