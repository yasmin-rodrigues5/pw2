const prompt = require ("prompt-sync")();

let senha = Number(prompt("Digite a senha correta "));
let senhaCerta = "40028922";

if (senha != senhaCerta){
    console.log("A senha está diferente / incorreta!")
    console.log("senha correta: " ,senhaCerta)

}

/*Neste exercício, é criado duas variaveis, a senhaCerta que armazena o valor definido/correto e a
variavel "senha" que é pedido para o usuário tentar digitar a senha correta e logo 
o valor é guardado na variavel.

com o auxilio do operador IF, é feito a verificado se a senha está diferente com ajudo do
!=, e caso essa condicao esteja certa, é printado no console a mensagem de senha incorreta!*/