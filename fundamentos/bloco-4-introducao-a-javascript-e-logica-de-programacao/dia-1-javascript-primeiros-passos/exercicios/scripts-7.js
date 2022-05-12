//Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F.

let porcertagem = 147;

if(porcertagem < 0 || porcertagem >= 101){
    console.log("Nota inválida!");
}
else if(porcertagem >= 90){
    console.log("Sua nota é A");
}
else if(porcertagem >= 80){
    console.log("Sua nota é B");
}
else if(porcertagem >= 70){
    console.log("Sua nota é C");
}
else if(porcertagem >= 50){
    console.log("Sua nota é E");
}
else (porcertagem < 50){
    console.log("Sua nota é F");   
}