//Crie um algoritmo que retorne o fatorial de 10

let number = 10;
let factorial = number;

for(let count = 1; count < number; count += 1){
    factorial = factorial * (number - count);
}

console.log(`O fatorial do neumero ${number} é ${factorial}`)
