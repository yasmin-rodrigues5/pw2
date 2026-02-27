/*const prompt = require ("prompt-sync")();

let num1 = Number(prompt("Digite o primeiro número: "));
let num2 = Number(prompt("Digite o segundo número: "));

if( num1 == num2){
    console.log(num1 , num2, " - Seus números são iguais");
}else{
    console.log(num1 , num2, " - Seus números não são iguais");

}
*/

const prompt = require("prompt-sync")();

let vogais = prompt("Digite as vogais em ordem com virgula entre elas: ").toLowerCase().replace(/\s/g, ""); 

if (vogais === "a,e,i,o,u") {
    console.log("As vogais estão em ordem!");
} else {
    console.log("Ordem incorreta.");
}
/*
Neste exercício, é pedido para o usuário digitar as vogais na ordem correta,
O valor digitado é armazenado na variável vogais.
com auxilio da estrutura condicional IF/ELSE,
o programa compara a resposta do usuário com a ordem certa.
Caso estejam iguais, é exibida a mensagem informando
que as vogais estão na ordem certa.
Caso contrário, o programa informa que está incorreto.
*/