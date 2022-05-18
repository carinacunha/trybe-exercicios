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

//4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

//  function biggerName(array){
//     for(index = 1; index < array.length; index += 1){
//         if(array[index].length > bigger.length){
//             bigger = array[index];
//         }
//      }
//     return console.log(bigger.length);
//  }

// let array =  ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
// let bigger = array[3];
// biggerName(array);


//🚀 5. Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

// let numbers = [2, 3, 2, 5, 8, 2, 3, 5, 5, 5];


// function returnFrequent(numbers){

//     let counts = [];

//     for(position1 of numbers){
//         let count = 0;
    
//         for(position2 of numbers){
//             if(position1 === position2){
//                 count += 1;
//             }
//         }
//         counts.push(count);
//     };
    
//     let biggestIndex = 0;
//     for(index in counts){
//         if(counts[index] > counts[biggestIndex]){
//             biggestIndex = index;
//         }
//     }
    
//     return numbers[biggestIndex];
// }

// let result = returnFrequent(numbers);
// console.log(result);


//6.Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.


// let numero = 5;

// function summation(numero){
//     let sum = 0;
//     for(n = 1; n <= numero; n += 1){
//         sum += n;
//    }
//    return sum;
// }

// result = summation(numero);
// console.log(result);

//7. Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word. Considere que a string ending sempre será menor que a string word.

let word = 'trybe';
let ending = 'be';

function verificaFimPalavra(word, ending){

    let wordEnding = word.substring(word.length - ending.length, word.length);
    
    if(wordEnding === ending){
        return true;
    }

    return false;
}

result = verificaFimPalavra('trybe', 'be');
console.log(result);




