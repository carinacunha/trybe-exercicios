//Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.

const primeiro = 10;
const segundo = 30;
const terceiro = 1;

if(primeiro > segundo & primeiro > terceiro){
    console.log(primeiro);
}

else if(segundo > primeiro & segundo > terceiro){
    console.log(segundo);
}
else{
    console.log(terceiro);
}

