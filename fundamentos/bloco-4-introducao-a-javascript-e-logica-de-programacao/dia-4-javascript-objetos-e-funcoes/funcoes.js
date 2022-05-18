// //1. Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.

// function verificaPalindromo(string) {
//     let split = string.split('');
//     console.log(split);

//     let reverse = split.reverse();
//     console.log(reverse);
       
//     let joinString = reverse.join('');
//     console.log(joinString); 

//     if (string === joinString){
//         return true;
//     }
//     return false;
//  };


// string = 'cama';
// console.log(verificaPalindromo(string));


//2. Crie uma função que receba um array de inteiros e retorne o índice do maior valor;


// function retornarMaior(array){
//     for(index = 1; index < array.length; index += 1){
//         if(array[index] > array[indexBigger]){
//             indexBigger = index;
//         }
//     }
//     return indexBigger;
// }

// let array = [2, 3, 6, 7, 10, 1];
// let indexBigger = 0;
// console.log(retornarMaior(array));


//3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

// function retornarMaior(array){
//     for(index = 1; index < array.length; index += 1){
//         if(array[index] < array[indexSmaller]){
//             indexSmaller = index;
//         }
//     }
//     return indexSmaller;
// }

// let array = [2, 4, 6, 7, 10, 0, -3];
// let indexSmaller = 0;
// console.log(retornarMaior(array));
