let idade = 20;
let situacao = idade >= 18 ? "Maior de idade" : "Menor de idade";

console.log(situacao);

const resultado = (nota) => (nota >= 7 ? "Aprovado" : "Reprovado");

console.log(resultado(8));

const textBotao = (logado) => (logado ? "Sair" : "Entrar");

console.log(textBotao(true));