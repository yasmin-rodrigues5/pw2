const prompt = require ("prompt-sync")();

let idade = Number(prompt("Digite sua idade aqui para saber se você tem direito a meia-entrada: "));

if (idade < 18 || idade >= 60) {
        console.log("Você TEM DIREITO à meia-entrada!");
} else {
        console.log("Você NÃO TEM DIREITO à meia-entrada.");
}

/* 
Descrição do exercício sobre direito a meia entrada:

Esse exercício tem como objetivo praticar o uso do operador lógico OU (||). 
O programa pede a idade do usuário e verifica se ele tem direito à meia-entrada.

O operador OU (||) funciona assim: basta que uma das condições seja verdadeira 
para que o resultado final também seja verdadeiro.

No caso do programa, se a idade for menor que 18 ou maior ou igual a 60, 
a pessoa tem direito à meia-entrada. Se nenhuma dessas condições for atendida, 
ela não tem direito.

Com esse exercício, usei if, else, operadores relacionais 
e o operador lógico OU. */