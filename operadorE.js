const prompt = require("prompt-sync")();

let idade = Number(prompt("Digite a sua idade: ").trim());
let temCarteira = prompt("Digite se você tem carteira (Sim ou Nao): ").trim();

if (idade >=18 && temCarteira.toLowerCase() == "sim"){
    console.log("Parabéns, você pode dirigir!");

} else{
    console.log("Sinto muito, você ainda não pode dirigir!")
}

/* 
Neste exercício, foi criadas as variáveis idade e temCarteira, 
que pedem o preenchimento do usuário (temCarteira deve ser respondida com "Sim" ou "Não").

Então, Os valores digitados são armazenados nas variáveis e, com o auxílio 
da estrutura IF/ELSE, é verificado se o usuário possui 
18 anos ou mais E se possui carteira de motorista.
Caso as duas condições sejam verdadeiras, o programa exibe a mensagem:
"Você pode dirigir".
Caso contrário, o programa informa que o usuário ainda não pode dirigir.
*/
