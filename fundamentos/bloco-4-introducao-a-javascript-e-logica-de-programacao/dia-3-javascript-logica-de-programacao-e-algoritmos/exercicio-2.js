//Desenvolva um algoritmo que é capaz de inverter uma palavra

let word = 'tryber';
let invertido = '';

for(let index =  word.length -1; index >= 0;  index -= 1){
    invertido = invertido + (word[index]);
}
console.log(invertido)

