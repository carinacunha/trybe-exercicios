//3. Calcule e imprima a média aritmética dos valores contidos no array

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
sum = 0;
mean = null;

for(var index = 0; index < numbers.length; index += 1){
    sum = sum + numbers[index];
}
mean = sum / numbers.length;

console.log(`A soma dos valores da array é ${sum} e a média ${mean}`)