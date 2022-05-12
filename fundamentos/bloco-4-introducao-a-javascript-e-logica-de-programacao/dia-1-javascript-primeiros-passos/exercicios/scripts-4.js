//Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

const number = 100;

if(number < 0){
    console.log("negative");
}
if(number == 0){
    console.log("zero");
}
if(number > 0){
    console.log("positive")
}