//1.Crie uma função que receba um número e retorne seu fatorial.

// Primeira forma
// function fatorial (number){
//   let factorial = number;
//   for(let n = 1; n < number; n +=1){
//     factorial = factorial * (number - n);
//   }
//   console.log(factorial);
// }
 
// Solução usando o ternary operator
const fatorial = (number) =>((number === 0) ? (1) : number * fatorial(number-1));

console.log(fatorial(3));


