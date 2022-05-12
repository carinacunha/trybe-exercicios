//Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

const first = 80;
const second = 99;
const third = 9;

if(first + second + third == 180){
    console.log("true");
}
else if(first <=0 || second<= 0 || third <= 0){
    console.log("Ângulo inválido");
}
else{
    console.log("false");
}
