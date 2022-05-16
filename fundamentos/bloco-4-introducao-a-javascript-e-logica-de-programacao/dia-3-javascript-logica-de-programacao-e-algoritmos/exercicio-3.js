//Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.

let array = ['java', 'javascript', 'python', 'html', 'css'];
let lower = array[0];
let higher = array[0];

for(let index = 1; index < array.length; index += 1){
    if(array[index].length < lower.length){
        lower = array[index];
    }
    else if(array[index].length > higher.length){
        higher = array[index];
    }
}

console.log(lower);
console.log(higher);




