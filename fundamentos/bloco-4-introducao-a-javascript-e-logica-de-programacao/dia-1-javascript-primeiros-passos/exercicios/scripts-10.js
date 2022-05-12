//Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos

const custo = 80;
const valor = 120;
const custoFinal = custo + (custo * 20) /100;

const lucroFinal = (valor - custoFinal) * 1000;

console.log(`Ao vender 1000 produtos, o lucro final será R$ ${lucroFinal}`);