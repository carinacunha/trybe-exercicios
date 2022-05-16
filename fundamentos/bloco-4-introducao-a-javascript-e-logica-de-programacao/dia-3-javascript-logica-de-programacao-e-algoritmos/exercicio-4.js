//4. Escreva um algoritmo que retorne o maior número primo entre 0 e 50
let maiorPrimo = 0;
let n = 50;

for(let numero = 0; numero <= n; numero += 1){
    let ePrimo = true;
    
    //testando se o número é primo
    for(let divisor = 2; divisor < numero; divisor += 1){
        if(numero % divisor === 0){
            ePrimo = false;
        }
    if(ePrimo){
        maiorPrimo = numero;
    }
    }
}
console.log(maiorPrimo);
