//Exercício INSS

const bruto = 3000.00;
let inss = null;
let ir = null;
let salarioLiquido = null;

if(bruto <= 1556.94){
    inss = bruto * 8 / 100;
}

else if(bruto >= 1556.95 && bruto <= 2594.92){
    inss = bruto * 9 / 100;
}

else if(bruto >= 2594.93 && bruto <= 5189.92){
    inss = bruto * 11 / 100;
}

else if(bruto > 5189.82){
    inss = 570.88;
}

let salarioBase = bruto - inss;

if(salarioBase <= 1903.98){
    ir = (salarioBase * 0 / 100);
}

else if(salarioBase >= 1903.99 &&  salarioBase <= 2826.65){
    ir = (salarioBase * 7.5 / 100) - 142.80;
}

else if(salarioBase >= 2826.66 && salarioBase <= 3751.05){
    ir = (salarioBase * 15 / 100) - 354.80;
}

else if(salarioBase >= 3751.06 && salarioBase <= 4664.68){
    ir = (salarioBase * 22.5 / 100) - 636.13;
}

else if(salarioBase >= 4664.68){
    ir = (salarioBase * 27.5 / 100) - 869.36;
}

salarioLiquido = salarioBase - ir;

console.log(bruto);
console.log(inss);
console.log(salarioBase);
console.log(ir);
console.log(salarioLiquido);
