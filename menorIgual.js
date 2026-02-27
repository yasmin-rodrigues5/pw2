const prompt = require ("prompt-sync")();

let num = Number(prompt("Digite o número que você deseja, e descubra se é menor ou igual a 10: "));

if (num <= 10){
    console.log(num , " é menor ou igual a 10");
}else{
    console.log(num, "não é menor ou igual a 10!");
}
    /* Neste Exercício, é pedido para o usuário escrever um número, o valor escrito é guardado
    na variavel num, e logo é feita a comparação : se o valor for menor ou igual a 5 e o
    resultado é printado no console*/