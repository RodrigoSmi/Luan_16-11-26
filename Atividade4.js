const numeros = [2,3];

const pares = numeros.filter(n => n % 2 === 0);

console.log(pares);

const notas = [5, 8, 6, 9, 7];

const aprovadas = notas.filter(nota => nota >= 7);

console.log(aprovadas);

const produtos = [
  { nome: "Caderno", preco: 25 },
  { nome: "Caneta", preco: 5 },
  { nome: "Mochila", preco: 120 },
  { nome: "Calculadora", preco: 60 }
];

const nomesProdutosBaratos = produtos
  .filter(produto => produto.preco < 50)
  .map(produto => produto.nome);

console.log(nomesProdutosBaratos);