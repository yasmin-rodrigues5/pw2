const prompt = require("prompt-sync")();

let nomes = [];

for (let i = 0; i < 3; i++) {
    nomes[i] = (prompt("Digite o nome 1: "));
}

console.log("Nomes digitados:");

for (let i = 0; i < 3; i++) {
    console.log(nomes[i]);
}

nomes.splice(1, 1);

console.log("Remoção:");

for (let i = 0; i < nomes.length; i++) {
    console.log(nomes[i]);
}
/*Neste exercício, foi criado o vetor nome, com o auxilio do laco for, a repeticao é feita e 
é perguntado os nomes desejados, com o console, os nomes são printados.
Após isso, com o splice, a posicao e elemento a ser removido é escolhido (1,1) onde comeca na 
posicao 1 e elimina 1 elemento, é printado c o console o aviso de remoção e com o laço for
é printado os nomes novamente.*/