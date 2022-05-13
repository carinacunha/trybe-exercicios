//2. Some todos os valores contidos no array e imprima o resultado;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
var result = 0;

for(var index = 0; index < numbers.length; index += 1){
    result = result + numbers[index];  //é o mesmo que result += numbers[index]
}
console.log(`A soma dos valores da array é ${result}`);