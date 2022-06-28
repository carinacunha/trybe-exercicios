// 1. Produza o mesmo resultado acima, porém utilizando array destructuring
// const [saudacao, realizandoSaudacao] = saudacoes;

// const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

// saudacoes[1](saudacoes[0]); // Olá

// console.log(realizandoSaudacao(saudacao));

// 2. Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo

// let comida = 'gato';
// let animal = 'água';
// let bebida = 'arroz';

// console.log(comida, animal, bebida); // arroz gato água


// [comida, animal, bebida] = [bebida, comida, animal];

// console.log(comida, animal, bebida);

// 3.  Utilize array destructuring para produzir o resultado esperado pelo console.log abaixo

let numerosPares = [1, 3, 5, 6, 8, 10, 12];

const[,,, num1, num2, num3, num4] = numerosPares

console.log([num1, num2, num3, num4]); // [6, 8, 10, 12];
