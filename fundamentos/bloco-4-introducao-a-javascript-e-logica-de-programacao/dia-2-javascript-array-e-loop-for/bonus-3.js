//Crie um novo array a partir do array numbers, sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let newNumbers = [];

for (let index = 0; index < numbers.length; index += 1){
    if(index < numbers.length - 1){
        newNumbers.push(numbers[index] * numbers[index + 1]); 
    }
    else{
        newNumbers.push(numbers[index] * 2);
    }       
}

console.log(newNumbers);

