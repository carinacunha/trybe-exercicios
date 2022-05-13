//8. Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado

let array = [];
let number;

for(index = 0; index<24; index += 1){
    number = Math.floor(Math.random() * 25) + 1;
    array.push(number);
}

console.log(array);